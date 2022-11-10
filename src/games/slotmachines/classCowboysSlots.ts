let fs = require('fs');
import { Client } from '../../client/classClient';
import { SlotMachine } from "./classSlotMachine";

//Clase vaqueros slotmachine
export class CowboysSlots extends SlotMachine{
    protected colors: string[];

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

    public playCowboySlot(betAmount:number, player: Client):void{
        if(this.betMin > betAmount){
            console.log('La apuesta minima es de: ' + this.betMin);
        }else{
            let readMe:string = fs.readFileSync('./src/games/slotmachines/data/cowboys/slotCowboys.txt', 'utf8');
            console.log(readMe);
            this.getColors();
            console.log(this.colors);
            let a = Math.floor(Math.random() * this.colors.length);
            let b = Math.floor(Math.random() * this.colors.length);
            let c = Math.floor(Math.random() * this.colors.length);
    
            if(a === b && a === c ){
                let result:number = betAmount * 2;
                console.log('-------------------------');
                console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);            
                console.log('Ganaste: ' + result);
                console.log('-------------------------');
                player.setCashAmount(player.getCashAmount() + result);
                fs.writeFileSync('./src/games/slotmachines/data/cowboys/cowboysStatistics.txt', result.toString());
                
            } else {
                console.log('-------------------------');
                console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c]);     
                console.log('Perdiste: ' + betAmount);
                console.log('-------------------------');
                player.setCashAmount(player.getCashAmount() - betAmount);
                fs.writeFileSync('./src/games/slotmachines/data/cowboys/cowboysStatistics.txt', betAmount.toString());
            }
            this.sideBet(betAmount,player);
        }
    }

    sideBet(betAmount:number, player:Client):void{
        let x: number = Math.floor(Math.random() * 10);
        if(x === 4){
            let result:number = betAmount + 1000;
            player.setCashAmount(player.getCashAmount() + result);
            fs.writeFileSync('./src/games/slotmachines/data/cowboys/cowboysStatistics.txt', result.toString());
            console.log('Gano la apuesta secundaria. Gano: ' + betAmount);
            console.log('-------------------------');
        } else {
            console.log('Perdio la apuesta secundaria.');
            console.log('-------------------------');
        }
    }
}


