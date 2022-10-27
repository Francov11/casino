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
var classSlotMachine_1 = require("./classSlotMachine");
var PiratesSlots = /** @class */ (function (_super) {
    __extends(PiratesSlots, _super);
    function PiratesSlots(pTheme, pBetMin, pWinProbability, pWinNumbers) {
        return _super.call(this, pTheme, pBetMin, pWinProbability, pWinNumbers) || this;
    }
    ;
    return PiratesSlots;
}(classSlotMachine_1.SlotMachine));
exports.PiratesSlots = PiratesSlots;
var pirateTest = new PiratesSlots("Piratas01", 10, 3, [1, 2, 3]);
pirateTest.play();
