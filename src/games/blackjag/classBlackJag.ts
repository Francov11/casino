var readlineSync = require('readline-sync')


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

    public playBlackjack() {
        let cartas:number[] = [1,2,3,4,5,6,7,8,9,10,10,10,10]
        let a = Math.floor(Math.random() * cartas.length)       
        let b = Math.floor(Math.random() * cartas.length)
        let aux: number = a + b
        
        if(aux < 21){
        
        let option: number = readlineSync.question("aca la pregunta q le haces al usuario") // Aca utlizaria el readline-sink
        switch(option){ // Utilizar switch dentro del while para poder pedir una carta si suma menos de 21?
            case 1: {
                console.log('Hit')
                let x = Math.floor(Math.random() * cartas.length)
                aux = a + b + x
                console.log(aux);
                if(aux === 21){
                console.log('Ganaste, sumas: ' + aux)
                }
                break;
            }
            case 2: {
                console.log('Drop')
                console.log('You lose')
                break;
            }
        }       
        }else if(aux === 21){
            console.log("Ganaste")
        }else if(aux > 21){
            console.log("perdiste");
        }
    }
}

let tableOne = new BlackJag(1, 2, true)

tableOne.playBlackjack()