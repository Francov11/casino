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
exports.CowboysSlots = void 0;
var fs = require('fs');
var classSlotMachine_1 = require("./classSlotMachine");
//Clase vaqueros slotmachine
var CowboysSlots = /** @class */ (function (_super) {
    __extends(CowboysSlots, _super);
    function CowboysSlots(pTheme, pBetMin, pWinProbability, pColors) {
        var _this = _super.call(this, pTheme, pBetMin, pWinProbability) || this;
        _this.colors = pColors;
        return _this;
    }
    ;
    CowboysSlots.prototype.getColors = function () {
        return this.colors;
    };
    CowboysSlots.prototype.setColors = function (pColors) {
        return this.colors = pColors;
    };
    CowboysSlots.prototype.playCowboySlot = function (betAmount, player) {
        if (this.betMin > betAmount) {
            console.log('La apuesta minima es de: ' + this.betMin);
        }
        else {
            var readMe = fs.readFileSync('./src/games/slotmachines/data/cowboys/slotCowboys.txt', 'utf8');
            console.log(readMe);
            this.getColors();
            console.log(this.colors);
            var a = Math.floor(Math.random() * this.colors.length);
            var b = Math.floor(Math.random() * this.colors.length);
            var c = Math.floor(Math.random() * this.colors.length);
            if (a === b && a === c) {
                var result = betAmount * 2;
                console.log('-------------------------');
                console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);
                console.log('Ganaste: ' + result);
                console.log('-------------------------');
                player.setCashAmount(player.getCashAmount() + result);
                fs.writeFileSync('./src/games/slotmachines/data/cowboys/cowboysStatistics.txt', result.toString());
            }
            else {
                console.log('-------------------------');
                console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);
                console.log('Perdiste: ' + betAmount);
                console.log('-------------------------');
                player.setCashAmount(player.getCashAmount() - betAmount);
                fs.writeFileSync('./src/games/slotmachines/data/cowboys/cowboysStatistics.txt', betAmount.toString());
            }
            this.sideBet(betAmount, player);
        }
    };
    CowboysSlots.prototype.sideBet = function (betAmount, player) {
        var x = Math.floor(Math.random() * 10);
        if (x === 4) {
            var result = betAmount + 1000;
            player.setCashAmount(player.getCashAmount() + result);
            fs.writeFileSync('./src/games/slotmachines/data/cowboys/cowboysStatistics.txt', result.toString());
            console.log('Gano la apuesta secundaria. Gano: ' + betAmount);
            console.log('-------------------------');
        }
        else {
            console.log('Perdio la apuesta secundaria.');
            console.log('-------------------------');
        }
    };
    return CowboysSlots;
}(classSlotMachine_1.SlotMachine));
exports.CowboysSlots = CowboysSlots;
