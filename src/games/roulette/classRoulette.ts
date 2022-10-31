export class Roulette {
    private rouletteNum: number;
    private minBet: number;

    
    constructor (pRouletteNum: number, pMinBet: number){
        this.rouletteNum = pRouletteNum;
        this.minBet = pMinBet;
    }

    public play(playerNum:number[]){
        let randomNum = Math.floor(Math.random() * 10);

        for(let i:number =0 ; i<playerNum.length; i++){
            if(randomNum === playerNum[i]){

                console.log("Ganaste" + 'num:' + randomNum)
            } else {
                console.log("Perdiste" + 'num:' + randomNum)
            }
        }

    }
}

let hola = new Roulette(1,4)

let jugada:number[]= [1,2,3]

hola.play(jugada)