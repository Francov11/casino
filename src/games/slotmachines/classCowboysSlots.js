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
var readlineSync = require('readline-sync');
var classSlotMachine_1 = require("./classSlotMachine");
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
    CowboysSlots.prototype.playCowboySlot = function (betAmount) {
        this.getColors();
        console.log(this.colors);
        var a = Math.floor(Math.random() * this.colors.length);
        var b = Math.floor(Math.random() * this.colors.length);
        var c = Math.floor(Math.random() * this.colors.length);
        if (a === b && a === c) {
            betAmount = betAmount + 500;
            console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);
            console.log('Ganaste: ' + betAmount);
        }
        else {
            betAmount = betAmount - betAmount;
            console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);
            console.log('Perdiste.');
        }
        this.sideBet(betAmount);
    };
    CowboysSlots.prototype.sideBet = function (betAmount) {
        var x = Math.floor(Math.random() * 10);
        if (x === 4) {
            betAmount = betAmount + 1000;
            return console.log('Gano la apuesta secundaria. Gano: ' + betAmount);
        }
        else {
            betAmount = betAmount - betAmount;
            return console.log('Perdio la apuesta secundaria.');
        }
    };
    return CowboysSlots;
}(classSlotMachine_1.SlotMachine));
exports.CowboysSlots = CowboysSlots;
