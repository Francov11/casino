var readlineSync = require('readline-sync')
import { Client } from "../client/classClient";
import { PiratesSlots } from "../games/slotmachines/classPiratesSlots"
import { CowboysSlots } from "../games/slotmachines/classCowboysSlots";
import { BlackJag } from "../games/blackjag/classBlackJag";
import { Roulette } from "../games/roulette/classRoulette";

export class Casino {
    protected name: string;
    protected Pirates: PiratesSlots;
    protected Cowboys: CowboysSlots; 
    constructor(pName: string){
        this.name = pName;
    }

    public playSlots(){
        let option: number = readlineSync.question("Ingrese la Slotmachine que desea jugar: 1: Pirates 2: Cowboys")
        switch(option){
            case 1: {
                let playBet: number = readlineSync.question("Ingrese la apuesta: ")
                this.Pirates.play()
                break;
            }
            case 2: {
                let playBet: number = readlineSync.question("Ingrese la apuesta: ")
                this.Cowboys.play()
                break;
            }
        }
    }

    public playRoulette(bet:number){
        
    }

    public playBlackJag(bet:number){
        
    }
}