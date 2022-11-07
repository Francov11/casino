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
    BlackJag.prototype.playBlackjack = function (client) {
        var cash = client.getCashAmount();
        var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var a = Math.floor(Math.random() * cartas.length);
        var b = Math.floor(Math.random() * cartas.length);
        var aux = a + b;
        console.log('Tus puntos: ' + aux);
        //if(aux < 21){
        while (aux < 21) {
            var option = parseInt(readlineSync.question("Ingrese opcion: 1: Hit, 2: Drop.  "));
            switch (option) {
                case 1: {
                    console.log('Hit');
                    var x = Math.floor(Math.random() * cartas.length);
                    aux = aux + x;
                    console.log('Tus puntos 1: ' + aux);
                    if (aux > 21) {
                        betAmount = betAmount - betAmount;
                        console.log("Perdiste tu apuesta");
                    }
                    else if (aux === 21) {
                        betAmount = betAmount + 500;
                        console.log("Ganaste: $" + betAmount);
                    }
                    //if(aux === 21){
                    //console.log('Ganaste, sumas: ' + aux)
                    //}
                    break;
                }
                case 2:
                    {
                        console.log('Drop');
                        console.log('Perdiste tu apuesta');
                        break;
                    }
                    break;
            }
        }
        /*}else if(aux === 21){
            betAmount = betAmount + 500;
            console.log("Ganaste: $" + betAmount )
            console.log
        }else if(aux > 21){
            betAmount = betAmount - betAmount;
            console.log("Perdiste tu apuesta");
        }*/
    };
    return BlackJag;
}());
exports.BlackJag = BlackJag;
//let tableOne = new BlackJag(1, 2, true)
var betAmount = parseInt(readlineSync.question("Ingrese la apuesta: "));
//tableOne.playBlackjack()
