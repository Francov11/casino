"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var readlineSync = require('readline-sync');
//Clase casino
var Casino = /** @class */ (function () {
    function Casino(pName, pPirates, pCowboys, pRoulette, pBlackjack) {
        this.name = pName;
        this.pirates = pPirates;
        this.cowboys = pCowboys;
        this.roulette = pRoulette;
        this.blackjack = pBlackjack;
    }
    Casino.prototype.getName = function () {
        return this.name;
    };
    Casino.prototype.setName = function (pName) {
        return this.name = pName;
    };
    Casino.prototype.playSlots = function (pirates, cowboys, betAmount, player) {
        var option = readlineSync.questionInt("Ingrese la Slotmachine que desea jugar: 1: Pirates 2: Cowboys | ");
        console.log('-------------------------');
        switch (option) {
            case 1: {
                pirates.playPiratesSlot(betAmount, player);
                break;
            }
            case 2: {
                cowboys.playCowboySlot(betAmount, player);
                break;
            }
            default: {
                console.log('Opcion invalida');
                break;
            }
        }
    };
    Casino.prototype.playRoulette = function (roulette, betAmount, player) {
        roulette.playRoulette(betAmount, player);
    };
    Casino.prototype.playBlackJag = function (blackjack, betAmount, player) {
        blackjack.playBlackjack(betAmount, player);
    };
    return Casino;
}());
exports.Casino = Casino;
