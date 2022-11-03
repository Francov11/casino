"use strict";
exports.__esModule = true;
exports.Roulette = void 0;
var Roulette = /** @class */ (function () {
    function Roulette(pRouletteId, pMinBet) {
        this.rouletteId = pRouletteId;
        this.minBet = pMinBet;
    }
    Roulette.prototype.play = function (playerBet, playerNumbers) {
        var randomNum = Math.floor(Math.random() * 36);
        var i = 0;
        var win = false;
        while (win === false && i < playerNumbers.length) {
            console.log("El numero analizado es ".concat(playerNumbers[i]));
            if (randomNum === playerNumbers[i]) {
                win = true;
                console.log("La bolita cay\u00F3 en el ".concat(randomNum, " \uD83D\uDC33"));
                console.log('Ganaste');
                break;
            }
            else {
                i++;
            }
            ;
        }
        ;
        if (win === false) {
            console.log("La bolita cay\u00F3 en el ".concat(randomNum, " - Perdiste \uD83E\uDDE8"));
        }
    };
    return Roulette;
}());
exports.Roulette = Roulette;
;
var tstRuleta = new Roulette(1, 10);
var jugada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tstRuleta.play(2, jugada);
