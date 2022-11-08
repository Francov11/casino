const fs = require('fs')
import { Client } from "../../client/classClient";
import { SlotMachine } from "./classSlotMachine";

export class PiratesSlots extends SlotMachine{

    constructor(pTheme: string, pBetMin: number, pWinProbability: number){
        super(pTheme, pBetMin, pWinProbability );
    };

    public playPiratesSlot(betAmount:number, player:Client){
        fs.readFileSync('./data/slotManual.txt', 'utf8')
        if(this.betMin > betAmount){
            console.log('La apuesta inicial es de: ' + this.betMin)
        } else {
            let a = Math.floor(Math.random() * 11)
            let b = Math.floor(Math.random() * 11)
            let c = Math.floor(Math.random() * 11)
            
            if(a === b && a === c){
                console.log('Te toco: ' + a + ', ' + b + ', ' + c)
                let result:number = betAmount * 2             
                console.log('Ganaste: ' + result)
                player.setCashAmount(player.getCashAmount() + result)
            } else {
                console.log('Te toco: ' + a + ', ' + b + ', ' + c)             
                console.log('Perdiste: ' + betAmount)
                player.setCashAmount(player.getCashAmount() - betAmount)
            }
        }
    }
}




