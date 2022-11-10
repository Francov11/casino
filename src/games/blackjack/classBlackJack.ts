let fs = require('fs');
let readlineSync = require('readline-sync');
import { Client } from '../../client/classClient';

//Clase blackjack
export class Blackjack {
    protected tableNumber: number;
    protected amountPlayers: number;
    protected privateTable: boolean;
    protected betMin: number;

    constructor(pTableNumber: number, pAmountPlayers: number, pPrivateTable: boolean, pBetMin:number){
        this.tableNumber = pTableNumber;
        this.amountPlayers = pAmountPlayers;
        this.privateTable = pPrivateTable;
        this.betMin = pBetMin;
    }

    public getTableNumber():number{
        return this.tableNumber;
    }

    public setTableNumber(pTableNumber:number):number{
        return this.tableNumber = pTableNumber;
    }

    public getAmountPlayers():number{
        return this.amountPlayers;
    }

    public setAmountPlayers(pAmountPlayers:number):number{
        return this.tableNumber = pAmountPlayers;
    }

    public getPrivateTable():boolean{
        return this.privateTable;
    }

    public setPrivateTable(pPrivateTable:boolean):boolean{
        return this.privateTable = pPrivateTable;
    }

    public getBetmin():number{
        return this.betMin;
    }

    public setBetmin(pBetMin:number):number{
        return this.betMin = pBetMin;
    }

    public playBlackjack(betAmount:number, player:Client):void{
        if(this.betMin > betAmount){
            console.log('La apuesta minima es de: ' + this.betMin);
        } else {
            let readMe:string = fs.readFileSync('./src/games/blackjack/data/blackjackManual.txt', 'utf8');
            console.log('-------------------------');
            console.log(readMe);
            console.log('-------------------------');
            let cartas:number[] = [1,2,3,4,5,6,7,8,9,10,10,10,10];
            let a = Math.floor(Math.random() * cartas.length);       
            let b = Math.floor(Math.random() * cartas.length);
            let aux: number = a + b;
    
            console.log('Tus puntos: ' + aux);
            console.log('-------------------------');
            if(aux < 21){
            let option: number = readlineSync.questionInt("Ingrese opcion: 1: Hit, 2: Drop | ");
            switch(option){ 
                case 1: {
                    let x = Math.floor(Math.random() * cartas.length);
                    aux = aux + x;
                    if(aux === 21){
                        console.log('-------------------------');
                        console.log('Tus puntos: ' + aux);
                        let result:number = betAmount * 2;
                        console.log("Ganaste: $" + betAmount );
                        console.log('-------------------------');
                        player.setCashAmount(player.getCashAmount() + result);
                        fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', result.toString());
                    } else if(aux > 21){
                        console.log('-------------------------');
                        console.log('Tus puntos: ' + aux);
                        console.log("Perdiste: $" + betAmount);
                        console.log('-------------------------');
                        player.setCashAmount(player.getCashAmount() - betAmount);
                        fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', betAmount.toString());
                    } else if(aux < 21){
                        console.log('-------------------------');
                        console.log('Tus puntos: ' + aux);
                        console.log("Perdiste: $" + betAmount);
                        console.log('-------------------------');
                        player.setCashAmount(player.getCashAmount() - betAmount);
                        fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', betAmount.toString());
                    }
                    break;
                }
                case 2: {
                    console.log('-------------------------');
                    console.log('Drop');
                    console.log('Perdiste: $' + betAmount);
                    console.log('-------------------------');
                    break;
                }
                default: {
                    console.log('Opcion invalida.');
                }
            }   
        }else if(aux === 21){
            let result:number = betAmount * 2;
            player.setCashAmount(player.getCashAmount() + result);
            console.log('-------------------------');
            console.log('Tus puntos: ' + aux);
            console.log("Ganaste: $" + result );
            console.log('-------------------------');
            fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', betAmount.toString());
            }else if(aux > 21){
                player.setCashAmount(player.getCashAmount() - betAmount);
                console.log('-------------------------');
                console.log('Tus puntos: ' + aux);
                console.log("Perdiste: $" + betAmount);
                console.log('-------------------------');
                fs.writeFileSync('./src/games/blackjack/data/blackjackStatistics.txt', betAmount.toString());
            }
        }

    }
}