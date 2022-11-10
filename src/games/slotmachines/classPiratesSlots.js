"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PiratesSlots = void 0;
var fs = require('fs');
var classSlotMachine_1 = require("./classSlotMachine");
//Clase piratas slotmachine
var PiratesSlots = /** @class */ (function (_super) {
    __extends(PiratesSlots, _super);
    function PiratesSlots(pTheme, pBetMin, pWinProbability) {
        return _super.call(this, pTheme, pBetMin, pWinProbability) || this;
    }
    ;
    PiratesSlots.prototype.playPiratesSlot = function (betAmount, player) {
        if (this.betMin > betAmount) {
            console.log('La apuesta minima es de: ' + this.betMin);
        }
        else {
            var readMe = fs.readFileSync('./src/games/slotmachines/data/pirates/slotPirates.txt', 'utf8');
            console.log(readMe);
            console.log('-------------------------');
            var a = Math.floor(Math.random() * 11);
            var b = Math.floor(Math.random() * 11);
            var c = Math.floor(Math.random() * 11);
            if (a === b && a === c) {
                console.log('Te toco: ' + a + ', ' + b + ', ' + c);
                var result = betAmount * 2;
                console.log('Ganaste: ' + result);
                console.log('-------------------------');
                player.setCashAmount(player.getCashAmount() + result);
                fs.writeFileSync('./src/games/slotmachines/data/pirates/piratesStatistics.txt', result.toString());
            }
            else {
                console.log('Te toco: ' + a + ', ' + b + ', ' + c);
                console.log('Perdiste: ' + betAmount);
                console.log('-------------------------');
                player.setCashAmount(player.getCashAmount() - betAmount);
                fs.writeFileSync('./src/games/slotmachines/data/pirates/piratesStatistics.txt', betAmount.toString());
            }
        }
    };
    return PiratesSlots;
}(classSlotMachine_1.SlotMachine));
exports.PiratesSlots = PiratesSlots;
