const fs = require('fs');
import { Client } from "../../client/classClient";
import { SlotMachine } from "./classSlotMachine";

//Clase piratas slotmachine
export class PiratesSlots extends SlotMachine{

    constructor(pTheme: string, pBetMin: number, pWinProbability: number){
        super(pTheme, pBetMin, pWinProbability );
    };

    public playPiratesSlot(betAmount:number, player:Client):void{
        if(this.betMin > betAmount){
            console.log('La apuesta minima es de: ' + this.betMin);
        } else {
            let readMe:string = fs.readFileSync('./src/games/slotmachines/data/pirates/slotPirates.txt', 'utf8');
            console.log(readMe);
            console.log('-------------------------');
            let a = Math.floor(Math.random() * 11);
            let b = Math.floor(Math.random() * 11);
            let c = Math.floor(Math.random() * 11);
            
            if(a === b && a === c){
                console.log('Te toco: ' + a + ', ' + b + ', ' + c);
                let result:number = betAmount * 2;           
                console.log('Ganaste: ' + result);
                console.log('-------------------------');
                player.setCashAmount(player.getCashAmount() + result);
                fs.writeFileSync('./src/games/slotmachines/data/pirates/piratesStatistics.txt', result.toString());
            } else {
                console.log('Te toco: ' + a + ', ' + b + ', ' + c) ;           
                console.log('Perdiste: ' + betAmount);
                console.log('-------------------------');
                player.setCashAmount(player.getCashAmount() - betAmount);
                fs.writeFileSync('./src/games/slotmachines/data/pirates/piratesStatistics.txt', betAmount.toString());
            }
        }
    }
}




