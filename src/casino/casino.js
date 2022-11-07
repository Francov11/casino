"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var readlineSync = require('readline-sync');
var Casino = /** @class */ (function () {
    function Casino(pName) {
        this.name = pName;
    }
    Casino.prototype.getName = function () {
        return this.name;
    };
    Casino.prototype.setName = function (pName) {
        return this.name = pName;
    };
    Casino.prototype.playSlots = function (pirates, cowboys, betAmount) {
        var option = readlineSync.questionInt("Ingrese la Slotmachine que desea jugar: 1: Pirates 2: Cowboys");
        switch (option) {
            case 1: {
                pirates.playPiratesSlot(betAmount);
                break;
            }
            case 2: {
                cowboys.playCowboySlot(betAmount);
                break;
            }
        }
    };
    Casino.prototype.playRoulette = function () {
        // Aca va la ruleta
    };
    Casino.prototype.playBlackJag = function () {
        //this.Blackjack.playBlackjack()
    };
    return Casino;
}());
exports.Casino = Casino;
