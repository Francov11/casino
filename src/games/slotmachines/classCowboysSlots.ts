import { SlotMachine } from "./classSlotMachine";


export class CowboysSlots extends SlotMachine{
    colors: string[]

    constructor(pTheme: string, pBetMin: number, pWinProbability: number, pWinNumbers: number[], pBonus: number, pColors: string[]){
        super(pTheme, pBetMin, pWinProbability, pWinNumbers, pBonus);
        this.colors = pColors
    };

    testSlot(){
        this.colors = ['rojo', 'negro', 'blanco', 'violeta', 'celeste']
        let a = Math.floor(Math.random() * this.colors.length)
        let b = Math.floor(Math.random() * this.colors.length)
        let c = Math.floor(Math.random() * this.colors.length)

        if(a === b || a === c ){
            console.log('Te toco: ' + this.colors[a] + ', ' + this.colors[b] + ', ' + this.colors[c])
            console.log('Ganaste')
        } else {
            console.log('Perdiste')
        }
    }

    sideBet(pBetMin: number){
        let x: number = Math.floor(Math.random() * 10)
        if(x === 4){
            let cashWin = pBetMin + 1000
            return console.log('Gano la apuesta secundaria. Gano: ' + cashWin)
        } else {
            let cashLost = pBetMin - pBetMin
            return console.log('Perdio la apuesta secundaria. Perdio: ' + cashLost)
        }
    }

}

let firstCowboySlot = new CowboysSlots('Cowboys', 20, 2, [1,2], 1000, ['rojo', 'negro', 'blanco', 'violeta', 'celeste'])

firstCowboySlot.testSlot()

firstCowboySlot.sideBet(200)