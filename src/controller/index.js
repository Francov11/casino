"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var casino_1 = require("../casino/casino");
var classClient_1 = require("../client/classClient");
var classBlackJag_1 = require("../games/blackjag/classBlackJag");
var classCowboysSlots_1 = require("../games/slotmachines/classCowboysSlots");
var classPiratesSlots_1 = require("../games/slotmachines/classPiratesSlots");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    /*
    public betValidation(player:Client, betAmount:number){
        if(player.getCashAmount() < 10 ){
            console.log('Saldo insuficiente')
        } else {
            let betAmount: number = readlineSync.questionInt("Ingrese apuesta: ")
        }
    }*/
    Controller.prototype.chooseGame = function (casino, pirates, cowboys, blackjack, player) {
        var option = readlineSync.questionInt('Que desea jugar? 1: Slotmachines 2: Roullete 3: Blackjack | ');
        switch (option) {
            case 1: {
                var betAmount = readlineSync.questionInt("Ingrese apuesta: ");
                casino.playSlots(pirates, cowboys, betAmount, player);
                break;
            }
            case 2: {
                var betAmount = readlineSync.questionInt("Ingrese apuesta: ");
                casino.playRoulette();
                break;
            }
            case 3: {
                var betAmount = readlineSync.questionInt("Ingrese apuesta: ");
                casino.playBlackJag(blackjack, betAmount, player);
                break;
            }
            default: {
                console.log('Opcion invalida');
                break;
            }
        }
    };
    return Controller;
}());
var client = new classClient_1.Client('Franco', 19, 3000);
var casino = new casino_1.Casino('Casino');
var firstPiratesSlot = new classPiratesSlots_1.PiratesSlots("Piratas01", 10, 3);
var firstCowboySlot = new classCowboysSlots_1.CowboysSlots('Cowboys01', 20, 2, ['rojo', 'negro', 'blanco', 'violeta', 'celeste']);
var firstBlackjack = new classBlackJag_1.BlackJag(2, 1, true);
var controller = new Controller();
controller.chooseGame(casino, firstPiratesSlot, firstCowboySlot, firstBlackjack, client);
