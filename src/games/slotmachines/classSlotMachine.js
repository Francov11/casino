"use strict";
exports.__esModule = true;
exports.SlotMachine = void 0;
var SlotMachine = /** @class */ (function () {
    function SlotMachine(pTheme, pBetMin, pWinProbability, pWinNumbers) {
        this.theme = pTheme;
        this.betMin = pBetMin;
        this.winProbability = pWinProbability;
        this.winNumbers = pWinNumbers;
    }
    /*
        public getWinNumber(){
            if(this.betMin < 10){
                return console.log('Apuesta denegada, ingrese mas dinero')
            }else{
                let winNumber = Math.floor(Math.random() * 10);
                //this.numberOutput = winNumber
    
                return winNumber;
            }
        }
    */
    SlotMachine.prototype.play = function () {
        var aux = this.winNumbers;
        var randomNum = Math.floor(Math.random() * 10);
        for (var i = 0; i < aux.length; i++) {
            if (randomNum === aux[i]) {
                console.log("Te sali\u00F3 el ".concat(randomNum));
                console.log('Ganaste');
                break;
            }
            else {
                console.log("Te sali\u00F3 el ".concat(randomNum));
                console.log('Perdiste');
                break;
            }
        }
    };
    return SlotMachine;
}());
exports.SlotMachine = SlotMachine;
