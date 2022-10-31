"use strict";
exports.__esModule = true;
exports.Roulette = void 0;
var Roulette = /** @class */ (function () {
    function Roulette(pRouletteNum, pMinBet) {
        this.rouletteNum = pRouletteNum;
        this.minBet = pMinBet;
    }
    Roulette.prototype.play = function (playerNum) {
        var randomNum = Math.floor(Math.random() * 10);
        for (var i = 0; i < playerNum.length; i++) {
            if (randomNum === playerNum[i]) {
                console.log("Ganaste" + 'num:' + randomNum);
            }
            else {
                console.log("Perdiste" + 'num:' + randomNum);
            }
        }
    };
    return Roulette;
}());
exports.Roulette = Roulette;
var hola = new Roulette(1, 4);
var jugada = [1, 2, 3];
hola.play(jugada);
