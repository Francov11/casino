"use strict";
exports.__esModule = true;
exports.SlotMachine = void 0;
//Clase slotmachine padre
var SlotMachine = /** @class */ (function () {
    function SlotMachine(pTheme, pBetMin, pWinProbability) {
        this.theme = pTheme;
        this.betMin = pBetMin;
        this.winProbability = pWinProbability;
    }
    SlotMachine.prototype.getTheme = function () {
        return this.theme;
    };
    SlotMachine.prototype.setTheme = function (pTheme) {
        return this.theme = pTheme;
    };
    SlotMachine.prototype.getBetmin = function () {
        return this.betMin;
    };
    SlotMachine.prototype.setBetmin = function (pBetMin) {
        return this.betMin = pBetMin;
    };
    SlotMachine.prototype.getWinProbability = function () {
        return this.winProbability;
    };
    SlotMachine.prototype.setWinProbability = function (pWinProbability) {
        return this.winProbability = pWinProbability;
    };
    return SlotMachine;
}());
exports.SlotMachine = SlotMachine;
