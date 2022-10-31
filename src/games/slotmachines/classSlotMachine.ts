export class SlotMachine {
    protected theme: string;
    protected betMin: number;
    protected winProbability: number;
    protected winNumbers: number[];
    protected bonus: number;

    constructor(pTheme: string, pBetMin: number, pWinProbability: number, pWinNumbers: number[], pBonus: number){
        this.theme = pTheme;
        this.betMin = pBetMin;
        this.winProbability = pWinProbability;
        this.winNumbers = pWinNumbers;
        this.bonus = pBonus;
    }
    
    public play ():void{
        let aux = this.winNumbers;
        let randomNum = Math.floor(Math.random() * 10);
        for(let i: number = 0; i<aux.length; i++){
            if (randomNum === aux[i]){
                if(randomNum === 1){
                    let cashAmount = this.betMin * 2 + this.bonus
                    console.log(`Te salió el ${randomNum}`)
                    console.log('Ganaste: ' + cashAmount)
                    break;
                } else {
                    let cashAmount = this.betMin * 2
                    console.log(`Te salió el ${randomNum}`)
                    console.log('Ganaste: ' + cashAmount)
                }
            } else {
                let amounCashLost = this.betMin - this.betMin
                console.log(`Te salió el ${randomNum}`)
                console.log('Perdiste: ' + amounCashLost)
                break;
            }
        }
    }
}

