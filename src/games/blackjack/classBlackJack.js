"use strict";
exports.__esModule = true;
exports.Blackjack = void 0;
var fs = require('fs');
var readlineSync = require('readline-sync');
//Clase blackjack
var Blackjack = /** @class */ (function () {
    function Blackjack(pTableNumber, pAmountPlayers, pPrivateTable, pBetMin) {
        this.tableNumber = pTableNumber;
        this.amountPlayers = pAmountPlayers;
        this.privateTable = pPrivateTable;
        this.betMin = pBetMin;
    }
    Blackjack.prototype.getTableNumber = function () {
        return this.tableNumber;
    };
    Blackjack.prototype.setTableNumber = function (pTableNumber) {
        return this.tableNumber = pTableNumber;
    };
    Blackjack.prototype.getAmountPlayers = function () {
        return this.amountPlayers;
    };
    Blackjack.prototype.setAmountPlayers = function (pAmountPlayers) {
        return this.tableNumber = pAmountPlayers;
    };
    Blackjack.prototype.getPrivateTable = function () {
        return this.privateTable;
    };
    Blackjack.prototype.setPrivateTable = function (pPrivateTable) {
        return this.privateTable = pPrivateTable;
    };
    Blackjack.prototype.getBetmin = function () {
        return this.betMin;
    };
    Blackjack.prototype.setBetmin = function (pBetMin) {
        return this.betMin = pBetMin;
    };
    Blackjack.prototype.playBlackjack = function (betAmount, player) {
        if (this.betMin > betAmount) {
            console.log('La apuesta minima es de: ' + this.betMin);
        }
        else {
            var readMe = fs.readFileSync('./src/games/blackjack/data/blackjackManual.txt', 'utf8');
            console.log('-------------------------');
            console.log(readMe);
            console.log('-------------------------');
            var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
            var a = Math.floor(Math.random() * cartas.length);
            var b = Math.floor(Math.random() * cartas.length);
            var aux = a + b;
            console.log('Tus puntos: ' + aux);
            console.log('-------------------------');
            if (aux < 21) {
                var option = readlineSync.questionInt("Ingrese opcion: 1: Hit, 2: Drop | ");
                switch (option) {
                    case 1: {
                        var x = Math.floor(Math.random() * cartas.length);
                        aux = aux + x;
                        if (aux === 21) {
                            console.log('-------------------------');
                            console.log('Tus puntos: ' + aux);
                            var result = betAmount * 2;
                            console.log("Ganaste: $" + betAmount);
                            console.log('-------------------------');
                            player.setCashAmount(player.getCashAmount() + result);
                            fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', result.toString());
                        }
                        else if (aux > 21) {
                            console.log('-------------------------');
                            console.log('Tus puntos: ' + aux);
                            console.log("Perdiste: $" + betAmount);
                            console.log('-------------------------');
                            player.setCashAmount(player.getCashAmount() - betAmount);
                            fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', betAmount.toString());
                        }
                        else if (aux < 21) {
                            console.log('-------------------------');
                            console.log('Tus puntos: ' + aux);
                            console.log("Perdiste: $" + betAmount);
                            console.log('-------------------------');
                            player.setCashAmount(player.getCashAmount() - betAmount);
                            fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', betAmount.toString());
                        }
                        break;
                    }
                    case 2: {
                        console.log('-------------------------');
                        console.log('Drop');
                        console.log('Perdiste: $' + betAmount);
                        console.log('-------------------------');
                        break;
                    }
                    default: {
                        console.log('Opcion invalida.');
                    }
                }
            }
            else if (aux === 21) {
                var result = betAmount * 2;
                player.setCashAmount(player.getCashAmount() + result);
                console.log('-------------------------');
                console.log('Tus puntos: ' + aux);
                console.log("Ganaste: $" + result);
                console.log('-------------------------');
                fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', betAmount.toString());
            }
            else if (aux > 21) {
                player.setCashAmount(player.getCashAmount() - betAmount);
                console.log('-------------------------');
                console.log('Tus puntos: ' + aux);
                console.log("Perdiste: $" + betAmount);
                console.log('-------------------------');
                fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', betAmount.toString());
            }
        }
    };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
