var readlineSync = require('readline-sync')
import { Client } from "../client/classClient";
import { PiratesSlots } from "../games/slotmachines/classPiratesSlots"
import { CowboysSlots } from "../games/slotmachines/classCowboysSlots";
import { BlackJag } from "../games/blackjag/classBlackJag";
import { Roulette } from "../games/roulette/classRoulette";

export class Casino {
    protected name: string;

    constructor(pName: string){
        this.name = pName;
    }

    public getName():string{
        return this.name;
    }

    public setName(pName:string):string{
        return this.name = pName;
    }

    public playSlots(pirates:PiratesSlots, cowboys:CowboysSlots, betAmount:number):void{
        let option: number = readlineSync.questionInt("Ingrese la Slotmachine que desea jugar: 1: Pirates 2: Cowboys | ")
        switch(option){
            case 1: {
                pirates.playPiratesSlot(betAmount)
                break;
            }
            case 2: {
                cowboys.playCowboySlot(betAmount) 
                break;
            }
        }
    }

    public playRoulette(){
        // Aca va la ruleta
    }

    public playBlackJag(blackjack:BlackJag, betAmount:number){
        blackjack.playBlackjack(betAmount)
    }
}

//fs.readFileSync('./manuales/manualTragamonedasPoderoso.txt', 'utf8');
//fs.writeFileSync('datosEstadisticosTragamonedasPoderoso.txt', "\n" + "  Datos recolectados" + "\n" +"Tragamonedas Poderoso" + "\n" + "Resultado juego: " + resultado + "\n");
//console.log(fs.readFileSync('datosEstadisticosTragamonedasPoderoso.txt','utf-8'));