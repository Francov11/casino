export class SlotMachine {
    private theme: string;
    private betMin: number;
    private winProbability: number;
    private winNumbers: number[];

    constructor(pTheme: string, pBetMin: number, pWinProbability: number, pWinNumbers: number[]){
        this.theme = pTheme;
        this.betMin = pBetMin;
        this.winProbability = pWinProbability;
        this.winNumbers = pWinNumbers;
    }
    
    public play (){
        let aux = this.winNumbers;
        let randomNum = Math.floor(Math.random() * 10);
        for(let i: number = 0; i<aux.length; i++){
            if (randomNum === aux[i]){
                console.log(`Te salió el ${randomNum}`)
                console.log('Ganaste')
                break;
            } else {
                console.log(`Te salió el ${randomNum}`)
                console.log('Perdiste')
                break;
            }
        }

    }
}