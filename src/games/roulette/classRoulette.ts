import { Casino } from "../../casino/casino";

export class Roulette {
    private rouletteId: number;
    private minBet: number;

    constructor (pRouletteId: number, pMinBet: number){
        this.rouletteId = pRouletteId;
        this.minBet = pMinBet;
    }

    public play(playerBet:number,playerNumbers:number[]){
        let randomNum = Math.floor(Math.random() * 36);
        let i: number = 0
        let win:boolean = false
        while (win === false && i<playerNumbers.length){
            if (randomNum === playerNumbers[i]){
                win=true
                break;
            } else {
                i++
            };
        };
        if (win ===false){
            }
        }
    };

let tstRuleta = new Roulette (1,10)

let jugada:number[] = [1,2,3,4,5,6,7,8,9,10]