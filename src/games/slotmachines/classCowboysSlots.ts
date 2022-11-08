import { Client } from '../../client/classClient';
import { SlotMachine } from "./classSlotMachine";
import * as fs from 'fs'

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

    public playCowboySlot(betAmount:number, player: Client){
        this.getColors()
        console.log(this.colors)
        let a = Math.floor(Math.random() * this.colors.length);
        let b = Math.floor(Math.random() * this.colors.length);
        let c = Math.floor(Math.random() * this.colors.length);

        if(a === b && a === c ){
            let result:number = betAmount * 2 
            console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);            
            console.log('Ganaste: ' + result);
            player.setCashAmount(player.getCashAmount() + result)
            
        } else {
            console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);     
            console.log('Perdiste: ' + betAmount);
            player.setCashAmount(player.getCashAmount() - betAmount)
        }
        this.sideBet(betAmount,player)
    }

    sideBet(betAmount:number, player:Client){
        let x: number = Math.floor(Math.random() * 10);
        if(x === 4){
            let result:number = betAmount + 1000;
            player.setCashAmount(player.getCashAmount() + result)
            return console.log('Gano la apuesta secundaria. Gano: ' + betAmount);
        } else {
            player.setCashAmount(player.getCashAmount() - betAmount)
            return console.log('Perdio la apuesta secundaria. Perdio: ' + betAmount);
        }
    }
}


