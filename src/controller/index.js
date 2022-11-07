"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var casino_1 = require("../casino/casino");
var classClient_1 = require("../client/classClient");
var classCowboysSlots_1 = require("../games/slotmachines/classCowboysSlots");
var classPiratesSlots_1 = require("../games/slotmachines/classPiratesSlots");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.chooseGame = function (casino, pirates, cowboys) {
        var option = readlineSync.questionInt('Que desea jugar? 1: Slotmachines 2: Roullete 3: Blackjack  ');
        switch (option) {
            case 1: {
                var betAmount = readlineSync.questionInt("Ingrese apuesta: ");
                casino.playSlots(pirates, cowboys, betAmount);
                break;
            }
            case 3: {
                this.Casino.playRoulette();
                break;
            }
            case 1: {
                this.Casino.playBlackJag();
                break;
            }
        }
    };
    return Controller;
}());
var client = new classClient_1.Client('Franco', 19, 3000);
var casino1 = new casino_1.Casino('Casino');
var firstPiratesSlot = new classPiratesSlots_1.PiratesSlots("Piratas01", 10, 3);
var firstCowboySlot = new classCowboysSlots_1.CowboysSlots('Cowboys', 20, 2, ['rojo', 'negro', 'blanco', 'violeta', 'celeste']);
var controller = new Controller();
controller.chooseGame(casino1, firstPiratesSlot, firstCowboySlot);
