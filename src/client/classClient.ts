export class Client {
    protected name: string;
    protected age: number;
    protected cashAmount: number;

    constructor(pName: string, pAge: number, pCashAmount: number){
        this.name = pName;
        this.age = pAge;
        this.cashAmount = pCashAmount;
    }

    public getName():string{
        return this.name
    }

    public getAge():number{
        return this.age
    }

    public getCashAmount():number{
        return this.cashAmount
    }

    public setCashAmount(pCashAmount):number{
        return this.cashAmount = pCashAmount;
    }
}