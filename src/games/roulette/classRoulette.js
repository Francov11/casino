"use strict";
exports.__esModule = true;
exports.Roulette = void 0;
var Roulette = /** @class */ (function () {
<<<<<<< HEAD
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
=======
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
>>>>>>> franco-velazquez
        }
    };
    return Roulette;
}());
exports.Roulette = Roulette;
<<<<<<< HEAD
;
var tstRuleta = new Roulette(1, 10);
var jugada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tstRuleta.play(2, jugada);
=======
var hola = new Roulette(1, 4);
var jugada = [1, 2, 3];
hola.play(jugada);
>>>>>>> franco-velazquez
