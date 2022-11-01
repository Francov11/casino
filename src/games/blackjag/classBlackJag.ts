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
        
        
    }
}