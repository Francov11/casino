let readlineSync = require('readline-sync')
import * as fs from 'fs'
import { SlotMachine } from "./classSlotMachine";

export class CowboysSlots extends SlotMachine{
    colors: string[];

    constructor(pTheme: string, pBetMin: number, pWinProbability: number, pColors: string[]){
        super(pTheme, pBetMin, pWinProbability);
        this.colors = pColors;
    };

    public getColors():string[]{
        return this.colors;
    }

    public setColors(pColors:string[]):string[]{
        return this.colors = pColors;
    }

    public playCowboySlot(betAmount:number){
        this.getColors()
        console.log(this.colors)
        let a = Math.floor(Math.random() * this.colors.length);
        let b = Math.floor(Math.random() * this.colors.length);
        let c = Math.floor(Math.random() * this.colors.length);

        if(a === b && a === c ){
            betAmount = betAmount + 500;
            console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);            
            console.log('Ganaste: ' + betAmount);
            
        } else {
            betAmount = betAmount - betAmount
            console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);     
            console.log('Perdiste.');
        }
        this.sideBet(betAmount)
    }

    sideBet(betAmount:number){
        let x: number = Math.floor(Math.random() * 10);
        if(x === 4){
            betAmount = betAmount + 1000;
            return console.log('Gano la apuesta secundaria. Gano: ' + betAmount);
        } else {
            betAmount = betAmount - betAmount;
            return console.log('Perdio la apuesta secundaria.');
        }
    }

}


