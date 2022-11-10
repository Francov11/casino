//Clase slotmachine padre
export class SlotMachine {
    protected theme: string;
    protected betMin: number;
    protected winProbability: number;
    

    constructor(pTheme: string, pBetMin: number, pWinProbability: number){
        this.theme = pTheme;
        this.betMin = pBetMin;
        this.winProbability = pWinProbability;
    }
    
    public getTheme():string{
        return this.theme;
    }

    public setTheme(pTheme:string):string{
        return this.theme = pTheme;
    }

    public getBetmin():number{
        return this.betMin;
    }

    public setBetmin(pBetMin:number):number{
        return this.betMin = pBetMin;
    }

    public getWinProbability():number{
        return this.winProbability;
    }

    public setWinProbability(pWinProbability:number):number{
        return this.winProbability = pWinProbability;
    }
}

