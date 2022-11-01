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
var classSlotMachine_1 = require("./classSlotMachine");
var CowboysSlots = /** @class */ (function (_super) {
    __extends(CowboysSlots, _super);
    function CowboysSlots(pTheme, pBetMin, pWinProbability, pWinNumbers, pBonus, pColors) {
        var _this = _super.call(this, pTheme, pBetMin, pWinProbability, pWinNumbers, pBonus) || this;
        _this.colors = pColors;
        return _this;
    }
    ;
    CowboysSlots.prototype.testSlot = function () {
        this.colors = ['rojo', 'negro', 'blanco', 'violeta', 'celeste'];
        var a = Math.floor(Math.random() * this.colors.length);
        var b = Math.floor(Math.random() * this.colors.length);
        var c = Math.floor(Math.random() * this.colors.length);
        if (a === b || a === c) {
            console.log(a + b + c);
            console.log('Ganaste');
        }
        else {
            console.log('Perdiste');
        }
    };
    CowboysSlots.prototype.sideBet = function (pBetMin) {
        var x = Math.floor(Math.random() * 10);
        if (x === 4) {
            var cashWin = pBetMin + 1000;
            return console.log('Gano la apuesta secundaria. Gano: ' + cashWin);
        }
        else {
            var cashLost = pBetMin - pBetMin;
            return console.log('Perdio la apuesta secundaria. Perdio: ' + cashLost);
        }
    };
    return CowboysSlots;
}(classSlotMachine_1.SlotMachine));
exports.CowboysSlots = CowboysSlots;
var firstCowboySlot = new CowboysSlots('Cowboys', 20, 2, [1, 2], 1000, ['rojo', 'negro', 'blanco', 'violeta', 'celeste']);
firstCowboySlot.testSlot();
firstCowboySlot.sideBet(200);
