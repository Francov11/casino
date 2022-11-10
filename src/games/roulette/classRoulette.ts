let fs = require('fs');
var readlineSync = require('readline-sync');
import { Client } from "../../client/classClient";

export class Roulette {
    protected rouletteId: number;
    protected betMin: number;

    constructor (pRouletteId: number, pBetmin: number){
        this.rouletteId = pRouletteId;
        this.betMin = pBetmin;
    }

    public getRouletteId():number{
        return this.rouletteId;
    }

    public setRoulleteId(pRouletteId:number):number{
        return this.rouletteId = pRouletteId;
    }

    public getBetmin():number{
        return this.betMin;
    }

    public setBetmin(pBetMin:number):number{
        return this.betMin = pBetMin;
    }

    public playRoulette(betAmount:number, player:Client):void{
        if(this.betMin > betAmount){
            console.log('La apuesta minima es de: ' + this.betMin);
        } else {
            let readMe:string = fs.readFileSync('./src/games/roulette/data/rouletteManual.txt', 'utf8');
            console.log(readMe);
            console.log('-------------------------');
            var betNumberArray = [];
            let aux:number = 0;
            console.log('El numero maximo de apuestas es de 11')
            console.log('-------------------------');
            while (aux<=10) {
                let betNumber = readlineSync.questionInt("Ingrese numero de apuesta, (Ingrese '0' para terminar) | ");
                console.log('-------------------------');
                if (betNumber === 0) break;
                betNumberArray.push(betNumber);
                aux++;
                }
            let randomNum = Math.floor(Math.random() * 5);
            let i: number = 0;
            let win:boolean = false;
            console.log(`El número ganador es el ${randomNum}`);
            console.log('-------------------------');
            while (win === false && i<betNumberArray.length){
                if (randomNum === betNumberArray[i]){
                    win=true;
                    let result: number = betAmount * 2;
                    player.setCashAmount(player.getCashAmount() + result);
                    fs.writeFileSync('./src/games/roulette/data/rouletteStadistics.txt', result.toString());
                    console.log(`Ganaste: ${result}`);
                    console.log('-------------------------');
                    break;
                } else {
                    i++
                };
            };
            if (win === false){
                player.setCashAmount(player.getCashAmount() - betAmount);
                fs.writeFileSync('./src/games/roulette/data/rouletteStadistics.txt', betAmount.toString());
                console.log(`Perdiste: ${betAmount}`);
                console.log('-------------------------');
                }
        }
        }
};



