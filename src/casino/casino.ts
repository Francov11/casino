import { Client } from "../client/classClient";
import { PiratesSlots } from "../games/slotmachines/classPiratesSlots"
import { CowboysSlots } from "../games/slotmachines/classCowboysSlots";


export class Casino {
    protected name: string;

    constructor(pName: string){
        this.name = pName;
    }

    public playSlots(player:Client, bet:number){

    }

    public playRoulette(player:Client, bet:number){
        
    }

    public playBlackJag(player:Client, bet:number){
        
    }
}