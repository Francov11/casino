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
    
    public playBlackJag(){
        let cartas:number[] = [1,2,3,4,5,6,7,8,9,10,10,10,10]
        let a = Math.floor(Math.random() * cartas.length)       
        let b = Math.floor(Math.random() * cartas.length)
        let aux: number = a + b
        console.log('Primera carta: ' + a + ' Segunda carta: ' + b)
        if(aux < 21){
            let c = Math.floor(Math.random() * cartas.length)
            aux = a + b + c
            console.log('Nueva carta: ' + c )
        } else if(aux > 21 ){
            console.log('Suma: ' + aux)
            console.log('Perdiste')
        } else if(aux === 21){
            console.log('Suma: ' + aux)
            console.log('Ganaste')
        }
    }
    public playBlackJag2(){
        let cartas:number[] = [1,2,3,4,5,6,7,8,9,10,10,10,10]
        let a = Math.floor(Math.random() * cartas.length)       
        let b = Math.floor(Math.random() * cartas.length)
        let aux: number = a + b
        console.log('Primera carta: ' + a + ' Segunda carta: ' + b)
        while(aux !== 21 ){
            let x = Math.floor(Math.random() * cartas.length)
            aux = a + b + x
            console.log('Nueva carta: ' + x + ' Suma: ' + aux)
        }
        console.log('Suma final: ' + aux)
     
    }
    public playBlackJag3(){
        let cartas:number[] = [1,2,3,4,5,6,7,8,9,10,10,10,10]
        let a = Math.floor(Math.random() * cartas.length)       
        let b = Math.floor(Math.random() * cartas.length)
        let aux: number = a + b
        console.log('Primera carta: ' + a + ' Segunda carta: ' + b)
        do{
            let x = Math.floor(Math.random() * cartas.length)
            aux = a + b + x
            console.log('Nueva carta: ' + x + ' Suma: ' + aux)
            if(aux > 21){
                console.log('Perdiste, sumas: ' + aux)
                break;
            }
        } while(aux < 21 || aux > 21)
        if(aux === 21){
            console.log('Ganaste, sumas: ' + aux)
        }
    }

    public playBlackjack() {
        let cartas:number[] = [1,2,3,4,5,6,7,8,9,10,10,10,10]
        let a = Math.floor(Math.random() * cartas.length)       
        let b = Math.floor(Math.random() * cartas.length)
        let aux: number = a + b
        let option: number = 1 // Aca utlizaria el readline-sink
        switch(option){ //Utilizar switch dentro del while para poder pedir una carta si suma menos de 21?
            case 1: {
                console.log('Hit')
                let x = Math.floor(Math.random() * cartas.length)
                aux = a + b + x
                if(aux === 21){
                    console.log('Ganaste, sumas: ' + aux)
                }
            }
                break;
            case 2: {
                console.log('Drop')
                console.log('You lose')
            }
                break;
        }
    }
}

let tableOne = new BlackJag(1, 2, true)

tableOne.playBlackjack()