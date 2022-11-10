"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(pName, pAge, pCashAmount, pAdult) {
        this.name = pName;
        this.age = pAge;
        this.cashAmount = pCashAmount;
        this.adult = pAdult;
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
    Client.prototype.getAdult = function () {
        if (this.age >= 21) {
            return true;
        }
        else {
            return false;
        }
    };
    return Client;
}());
exports.Client = Client;
