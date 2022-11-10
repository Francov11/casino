"use strict";
exports.__esModule = true;
exports.Roulette = void 0;
var fs = require('fs');
var readlineSync = require('readline-sync');
var Roulette = /** @class */ (function () {
    function Roulette(pRouletteId, pBetmin) {
        this.rouletteId = pRouletteId;
        this.betMin = pBetmin;
    }
    Roulette.prototype.getRouletteId = function () {
        return this.rouletteId;
    };
    Roulette.prototype.setRoulleteId = function (pRouletteId) {
        return this.rouletteId = pRouletteId;
    };
    Roulette.prototype.getBetmin = function () {
        return this.betMin;
    };
    Roulette.prototype.setBetmin = function (pBetMin) {
        return this.betMin = pBetMin;
    };
    Roulette.prototype.playRoulette = function (betAmount, player) {
        if (this.betMin > betAmount) {
            console.log('La apuesta minima es de: ' + this.betMin);
        }
        else {
            var readMe = fs.readFileSync('./src/games/roulette/data/rouletteManual.txt', 'utf8');
            console.log(readMe);
            console.log('-------------------------');
            var betNumberArray = [];
            var aux = 0;
            console.log('El numero maximo de apuestas es de 11');
            console.log('-------------------------');
            while (aux <= 10) {
                var betNumber = readlineSync.questionInt("Ingrese numero de apuesta, (Ingrese '0' para terminar) | ");
                console.log('-------------------------');
                if (betNumber === 0)
                    break;
                betNumberArray.push(betNumber);
                aux++;
            }
            var randomNum = Math.floor(Math.random() * 5);
            var i = 0;
            var win = false;
            console.log("El n\u00FAmero ganador es el ".concat(randomNum));
            console.log('-------------------------');
            while (win === false && i < betNumberArray.length) {
                if (randomNum === betNumberArray[i]) {
                    win = true;
                    var result = betAmount * 2;
                    player.setCashAmount(player.getCashAmount() + result);
                    fs.writeFileSync('./src/games/roulette/data/rouletteStadistics.txt', result.toString());
                    console.log("Ganaste: ".concat(result));
                    console.log('-------------------------');
                    break;
                }
                else {
                    i++;
                }
                ;
            }
            ;
            if (win === false) {
                player.setCashAmount(player.getCashAmount() - betAmount);
                fs.writeFileSync('./src/games/roulette/data/rouletteStadistics.txt', betAmount.toString());
                console.log("Perdiste: ".concat(betAmount));
                console.log('-------------------------');
            }
        }
    };
    return Roulette;
}());
exports.Roulette = Roulette;
;
