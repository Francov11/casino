var readlineSync = require('readline-sync');
import { Client } from "../client/classClient";
import { PiratesSlots } from "../games/slotmachines/classPiratesSlots";
import { CowboysSlots } from "../games/slotmachines/classCowboysSlots";
import { Blackjack } from "../games/blackjack/classBlackJack";
import { Roulette } from "../games/roulette/classRoulette";

//Clase casino
export class Casino {
    protected name: string;
    protected pirates:PiratesSlots;
    protected cowboys:CowboysSlots;
    protected roulette:Roulette;
    protected blackjack:Blackjack;

    constructor(pName: string, pPirates:PiratesSlots, pCowboys:CowboysSlots, pRoulette:Roulette, pBlackjack:Blackjack){
        this.name = pName;
        this.pirates = pPirates;
        this.cowboys = pCowboys;
        this.roulette = pRoulette;
        this.blackjack = pBlackjack;
    }

    public getName():string{
        return this.name;
    }

    public setName(pName:string):string{
        return this.name = pName;
    }

    public playSlots(pirates:PiratesSlots, cowboys:CowboysSlots, betAmount:number, player:Client):void{
        let option: number = readlineSync.questionInt("Ingrese la Slotmachine que desea jugar: 1: Pirates 2: Cowboys | ");
        console.log('-------------------------');
        switch(option){
            case 1: {
                pirates.playPiratesSlot(betAmount,player);
                break;
            }
            case 2: {
                cowboys.playCowboySlot(betAmount,player);
                break;
            }
            default:{
                console.log('Opcion invalida');
                break;
            }
        }
    }

    public playRoulette(roulette:Roulette, betAmount:number, player:Client){
        roulette.playRoulette(betAmount, player);
    }

    public playBlackJag(blackjack:Blackjack, betAmount:number, player:Client){
        blackjack.playBlackjack(betAmount,player);
    }
}
