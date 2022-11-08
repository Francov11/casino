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
    Casino.prototype.playSlots = function (pirates, cowboys, betAmount, player) {
        var option = readlineSync.questionInt("Ingrese la Slotmachine que desea jugar: 1: Pirates 2: Cowboys | ");
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
    Casino.prototype.playRoulette = function () {
        // Aca va la ruleta
    };
    Casino.prototype.playBlackJag = function (blackjack, betAmount, player) {
        blackjack.playBlackjack(betAmount, player);
    };
    return Casino;
}());
exports.Casino = Casino;
//fs.readFileSync('./manuales/manualTragamonedasPoderoso.txt', 'utf8');
//fs.writeFileSync('datosEstadisticosTragamonedasPoderoso.txt', "\n" + "  Datos recolectados" + "\n" +"Tragamonedas Poderoso" + "\n" + "Resultado juego: " + resultado + "\n");
//console.log(fs.readFileSync('datosEstadisticosTragamonedasPoderoso.txt','utf-8'));
