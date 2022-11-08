"use strict";
exports.__esModule = true;
exports.BlackJag = void 0;
var readlineSync = require('readline-sync');
var BlackJag = /** @class */ (function () {
    function BlackJag(pTableNumber, pAmountPlayers, pPrivateTable) {
        this.tableNumber = pTableNumber;
        this.amountPlayers = pAmountPlayers;
        this.privateTable = pPrivateTable;
    }
    BlackJag.prototype.getTableNumber = function () {
        return this.tableNumber;
    };
    BlackJag.prototype.setTableNumber = function (pTableNumber) {
        return this.tableNumber = pTableNumber;
    };
    BlackJag.prototype.getAmountPlayers = function () {
        return this.amountPlayers;
    };
    BlackJag.prototype.setAmountPlayers = function (pAmountPlayers) {
        return this.tableNumber = pAmountPlayers;
    };
    BlackJag.prototype.getPrivateTable = function () {
        return this.privateTable;
    };
    BlackJag.prototype.setPrivateTable = function (pPrivateTable) {
        return this.privateTable = pPrivateTable;
    };
    BlackJag.prototype.playBlackjack = function (betAmount, player) {
        //fs.readFileSync('./information/manual.txt', 'utf-8')
        var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var a = Math.floor(Math.random() * cartas.length);
        var b = Math.floor(Math.random() * cartas.length);
        var aux = a + b;
        console.log('Tus puntos: ' + aux);
        if (aux < 21) {
            var option = readlineSync.questionInt("Ingrese opcion: 1: Hit, 2: Drop | ");
            switch (option) {
                case 1: {
                    console.log('Hit');
                    var x = Math.floor(Math.random() * cartas.length);
                    aux = aux + x;
                    if (aux > 21) {
                        console.log('Tus puntos: ' + aux);
                        console.log("Perdiste: $" + betAmount);
                        player.setCashAmount(player.getCashAmount() - betAmount);
                    }
                    else if (aux === 21) {
                        console.log('Tus puntos: ' + aux);
                        var result = betAmount * 2;
                        console.log("Ganaste: $" + betAmount);
                        player.setCashAmount(player.getCashAmount() + result);
                    }
                    break;
                }
                case 2: {
                    console.log('Drop');
                    console.log('Perdiste: $' + betAmount);
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
            console.log('Tus puntos: ' + aux);
            console.log("Ganaste: $" + result);
        }
        else if (aux > 21) {
            player.setCashAmount(player.getCashAmount() - betAmount);
            console.log('Tus puntos: ' + aux);
            console.log("Perdiste: $" + betAmount);
        }
    };
    return BlackJag;
}());
exports.BlackJag = BlackJag;
