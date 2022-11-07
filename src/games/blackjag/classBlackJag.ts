let readlineSync = require('readline-sync')
import * as fs from 'fs'

export class BlackJag {
    protected tableNumber: number;
    protected amountPlayers: number;
    protected privateTable: boolean;

    constructor(pTableNumber: number, pAmountPlayers: number, pPrivateTable: boolean){
        this.tableNumber = pTableNumber;
        this.amountPlayers = pAmountPlayers;
        this.privateTable = pPrivateTable;
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

    public playBlackjack(betAmount:number) {
        //fs.readFileSync('./information/manual.txt', 'utf-8')
        let cartas:number[] = [1,2,3,4,5,6,7,8,9,10,10,10,10]
        let a = Math.floor(Math.random() * cartas.length)       
        let b = Math.floor(Math.random() * cartas.length)
        let aux: number = a + b

        console.log('Tus puntos: ' + aux)
        
        //if(aux < 21){
        while(aux<21){

        let option: number = parseInt(readlineSync.question("Ingrese opcion: 1: Hit, 2: Drop.  ") )
        switch(option){ 
            case 1: {
                console.log('Hit')
                let x = Math.floor(Math.random() * cartas.length)
                aux = aux + x
                console.log('Tus puntos 1: ' + aux);
                if(aux > 21){
                    betAmount = betAmount - betAmount;
                    console.log("Perdiste tu apuesta");

                } else if(aux === 21){
                    betAmount = betAmount + 500;
                    console.log("Ganaste: $" + betAmount )
                }
                //if(aux === 21){
                //console.log('Ganaste, sumas: ' + aux)
                //}
                break;
            }
            case 2: {
                console.log('Drop')
                console.log('Perdiste tu apuesta')
                break;
            } break;
        }   
    }    
        /*}else if(aux === 21){
            betAmount = betAmount + 500;
            console.log("Ganaste: $" + betAmount )
            console.log
        }else if(aux > 21){
            betAmount = betAmount - betAmount;
            console.log("Perdiste tu apuesta");
        }*/
    }
}