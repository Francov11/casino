"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(pName, pAge, pCashAmount) {
        this.name = pName;
        this.age = pAge;
        this.cashAmount = pCashAmount;
    }
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.getAge = function () {
        return this.age;
    };
    Client.prototype.getCashAmount = function () {
        return this.cashAmount;
    };
    Client.prototype.setCashAmount = function (cash) {
        return this.cashAmount = cash;
    };
    return Client;
}());
exports.Client = Client;
