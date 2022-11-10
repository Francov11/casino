export class Client {
    protected name: string;
    protected age: number;
    protected cashAmount: number;
    protected adult: boolean;

    constructor(pName: string, pAge: number, pCashAmount: number, pAdult:boolean){
        this.name = pName;
        this.age = pAge;
        this.cashAmount = pCashAmount;
        this.adult = pAdult;
    }

    public getName():string{
        return this.name;
    }

    public getAge():number{
        return this.age;
    }

    public getCashAmount():number{
        return this.cashAmount;
    }

    public setCashAmount(cash: number):number{
        return this.cashAmount = cash;
    }

    public getAdult():boolean{
        if(this.age >= 21){
            return true;
        } else {
            return false;
        }
    }
}