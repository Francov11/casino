"use strict";
exports.__esModule = true;
exports.BlackJag = void 0;
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
    BlackJag.prototype.playBlackJag = function () {
        var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var a = Math.floor(Math.random() * cartas.length);
        var b = Math.floor(Math.random() * cartas.length);
        var aux = a + b;
        console.log('Primera carta: ' + a + ' Segunda carta: ' + b);
        if (aux < 21) {
            var c = Math.floor(Math.random() * cartas.length);
            aux = a + b + c;
            console.log('Nueva carta: ' + c);
        }
        else if (aux > 21) {
            console.log('Suma: ' + aux);
            console.log('Perdiste');
        }
        else if (aux === 21) {
            console.log('Suma: ' + aux);
            console.log('Ganaste');
        }
    };
    BlackJag.prototype.playBlackJag2 = function () {
        var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var a = Math.floor(Math.random() * cartas.length);
        var b = Math.floor(Math.random() * cartas.length);
        var aux = a + b;
        console.log('Primera carta: ' + a + ' Segunda carta: ' + b);
        while (aux !== 21) {
            var x = Math.floor(Math.random() * cartas.length);
            aux = a + b + x;
            console.log('Nueva carta: ' + x + ' Suma: ' + aux);
        }
        console.log('Suma final: ' + aux);
    };
    BlackJag.prototype.playBlackJag3 = function () {
        var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var a = Math.floor(Math.random() * cartas.length);
        var b = Math.floor(Math.random() * cartas.length);
        var aux = a + b;
        console.log('Primera carta: ' + a + ' Segunda carta: ' + b);
        do {
            var x = Math.floor(Math.random() * cartas.length);
            aux = a + b + x;
            console.log('Nueva carta: ' + x + ' Suma: ' + aux);
            if (aux > 21) {
                console.log('Perdiste, sumas: ' + aux);
                break;
            }
        } while (aux < 21 || aux > 21);
        if (aux === 21) {
            console.log('Ganaste, sumas: ' + aux);
        }
    };
    return BlackJag;
}());
exports.BlackJag = BlackJag;
var tableOne = new BlackJag(1, 2, true);
tableOne.playBlackJag3();
