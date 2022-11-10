"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var casino_1 = require("../casino/casino");
var classClient_1 = require("../client/classClient");
var classBlackJack_1 = require("../games/blackjack/classBlackJack");
var classRoulette_1 = require("../games/roulette/classRoulette");
var classCowboysSlots_1 = require("../games/slotmachines/classCowboysSlots");
var classPiratesSlots_1 = require("../games/slotmachines/classPiratesSlots");
//Clase controlador
var Controller = /** @class */ (function () {
    function Controller(pCasino, pPlayer) {
        this.casino = pCasino;
        this.player = pPlayer;
    }
    Controller.prototype.chooseGame = function (casino, pirates, cowboys, blackjack, roulette, player) {
        if (player.getAdult() === false) {
            console.log('Eres menor de edad');
        }
        else {
            var option = readlineSync.questionInt('Que desea jugar? 1: Slotmachines 2: Roullete 3: Blackjack | ');
            console.log('-------------------------');
            var betAmount = readlineSync.questionInt("Ingrese apuesta: ");
            if (betAmount > player.getCashAmount()) {
                console.log('-------------------------');
                console.log('Falta de dinero.');
            }
            else {
                switch (option) {
                    case 1: {
                        console.log('-------------------------');
                        casino.playSlots(pirates, cowboys, betAmount, player);
                        break;
                    }
                    case 2: {
                        console.log('-------------------------');
                        casino.playRoulette(roulette, betAmount, player);
                        break;
                    }
                    case 3: {
                        console.log('-------------------------');
                        casino.playBlackJag(blackjack, betAmount, player);
                        break;
                    }
                    default: {
                        console.log('-------------------------');
                        console.log('Opcion del menu invalida');
                    }
                }
            }
        }
    };
    return Controller;
}());
var client = new classClient_1.Client('Franco', 22, 2000, true);
var firstPiratesSlot = new classPiratesSlots_1.PiratesSlots("Piratas01", 10, 3);
var firstCowboySlot = new classCowboysSlots_1.CowboysSlots('Cowboys01', 20, 2, ['rojo', 'negro', 'blanco', 'violeta', 'celeste']);
var firstBlackjack = new classBlackJack_1.Blackjack(2, 1, true, 30);
var firstRoulette = new classRoulette_1.Roulette(1, 10);
var casino = new casino_1.Casino('Casino', firstPiratesSlot, firstCowboySlot, firstRoulette, firstBlackjack);
var controller = new Controller(casino, client);
controller.chooseGame(casino, firstPiratesSlot, firstCowboySlot, firstBlackjack, firstRoulette, client);
