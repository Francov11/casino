var readlineSync = require('readline-sync')
import { Casino } from "../casino/casino";
import { Client } from "../client/classClient";
import { BlackJag } from "../games/blackjag/classBlackJag";
import { CowboysSlots } from "../games/slotmachines/classCowboysSlots";
import { PiratesSlots } from "../games/slotmachines/classPiratesSlots";

class Controller {

    public betValidation(player:Client, betAmount:number){
        if(player.getCashAmount() < 10 ){
            console.log('Saldo insuficiente')
        } else {
            let betAmount: number = readlineSync.questionInt("Ingrese apuesta: ")
        }
    }

    public chooseGame(casino:Casino, pirates:PiratesSlots, cowboys:CowboysSlots, blackjack:BlackJag){
        let option: number = readlineSync.questionInt('Que desea jugar? 1: Slotmachines 2: Roullete 3: Blackjack | ' )
        switch(option){
            case 1:{
                let betAmount: number = readlineSync.questionInt("Ingrese apuesta: ")
                casino.playSlots(pirates,cowboys,betAmount)
                break;
            }
            case 3:{
                let betAmount: number = readlineSync.questionInt("Ingrese apuesta: ")
                casino.playRoulette()
                break;
            }
            case 1:{
                let betAmount: number = readlineSync.questionInt("Ingrese apuesta: ")
                casino.playBlackJag(blackjack,betAmount)
                break;
            }
        }
    }
}

let client = new Client('Franco', 19, 3000)
let casino1 = new Casino('Casino')
let firstPiratesSlot = new PiratesSlots ("Piratas01",10,3)
let firstCowboySlot = new CowboysSlots('Cowboys', 20, 2, ['rojo', 'negro', 'blanco', 'violeta', 'celeste']);
let firstBlackjack = new BlackJag(2,1,true)
let controller = new Controller() 



controller.chooseGame(casino1, firstPiratesSlot, firstCowboySlot, firstBlackjack)
