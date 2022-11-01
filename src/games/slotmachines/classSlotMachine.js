"use strict";
exports.__esModule = true;
exports.SlotMachine = void 0;
var SlotMachine = /** @class */ (function () {
    function SlotMachine(pTheme, pBetMin, pWinProbability, pWinNumbers, pBonus) {
        this.theme = pTheme;
        this.betMin = pBetMin;
        this.winProbability = pWinProbability;
        this.winNumbers = pWinNumbers;
        this.bonus = pBonus;
    }
    SlotMachine.prototype.play = function () {
        var aux = this.winNumbers;
        var randomNum = Math.floor(Math.random() * 10);
        for (var i = 0; i < aux.length; i++) {
            if (randomNum === aux[i]) {
                if (randomNum === 1) {
                    var cashAmount = this.betMin * 2 + this.bonus;
                    console.log("Te sali\u00F3 el ".concat(randomNum));
                    console.log('Ganaste: ' + cashAmount);
                    break;
                }
                else {
                    var cashAmount = this.betMin * 2;
                    console.log("Te sali\u00F3 el ".concat(randomNum));
                    console.log('Ganaste: ' + cashAmount);
                }
            }
            else {
                var amounCashLost = this.betMin - this.betMin;
                console.log("Te sali\u00F3 el ".concat(randomNum));
                console.log('Perdiste: ' + amounCashLost);
                break;
            }
        }
    };
    return SlotMachine;
}());
exports.SlotMachine = SlotMachine;
