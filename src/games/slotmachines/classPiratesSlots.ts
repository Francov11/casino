import { SlotMachine } from "./classSlotMachine";

export class PiratesSlots extends SlotMachine{

    constructor(pTheme: string, pBetMin: number, pWinProbability: number){
        super(pTheme, pBetMin, pWinProbability );
    };

    public playPiratesSlot(betAmount:number){
        if(this.betMin > betAmount){
            console.log('La apuesta inicial es de: ' + this.betMin)
        } else {
            let a = Math.floor(Math.random() * 11)
            let b = Math.floor(Math.random() * 11)
            let c = Math.floor(Math.random() * 11)
    
            if(a === b && a === c ){
                betAmount = betAmount + 500
                console.log('Te toco: ' + a + ', ' + b + ', ' + c)             
                console.log('Ganaste: ' + betAmount)
            } else {
                betAmount = betAmount - betAmount
                console.log('Te toco: ' + a + ', ' + b + ', ' + c)     
                console.log('Perdiste: ' + betAmount)
            }
        }
    }
}




