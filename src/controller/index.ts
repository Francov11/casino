var readlineSync = require('readline-sync');
import { Casino } from "../casino/casino";
import { Client } from "../client/classClient";
import { Blackjack } from "../games/blackjack/classBlackJack";
import { Roulette } from "../games/roulette/classRoulette";
import { CowboysSlots } from "../games/slotmachines/classCowboysSlots";
import { PiratesSlots } from "../games/slotmachines/classPiratesSlots";

//Clase controlador
class Controller {
    protected casino:Casino;
    protected player:Client;

    constructor(pCasino:Casino, pPlayer:Client){
        this.casino = pCasino;
        this.player = pPlayer;
    }

    public chooseGame(casino:Casino, pirates:PiratesSlots, cowboys:CowboysSlots, blackjack:Blackjack, roulette:Roulette, player:Client):void{
        if(player.getAdult() === false){
            console.log('Eres menor de edad')
        } else {
            let option: number = readlineSync.questionInt('Que desea jugar? 1: Slotmachines 2: Roullete 3: Blackjack | ' );
            console.log('-------------------------');
            let betAmount: number = readlineSync.questionInt("Ingrese apuesta: ");
            if(betAmount > player.getCashAmount()){
                console.log('-------------------------');
                console.log('Falta de dinero.')
            } else{
                switch(option){
                    case 1:{
                        console.log('-------------------------');
                        casino.playSlots(pirates,cowboys,betAmount,player);
                        break;
                    }
                    case 2:{
                        console.log('-------------------------');
                        casino.playRoulette(roulette, betAmount, player);
                        break;
                    }
                    case 3:{
                        console.log('-------------------------');
                        casino.playBlackJag(blackjack,betAmount,player);
                        break;
                    }
                    default: {
                        console.log('-------------------------');
                        console.log('Opcion del menu invalida');
                    }
                }
            }
        }
    }
}

let client = new Client('Franco', 22, 2000, true);
let firstPiratesSlot = new PiratesSlots ("Piratas01",10,3);
let firstCowboySlot = new CowboysSlots('Cowboys01', 20, 2, ['rojo', 'negro', 'blanco', 'violeta', 'celeste']);
let firstBlackjack = new Blackjack(2,1,true,30);
let firstRoulette = new Roulette (1,10)
let casino = new Casino('Casino', firstPiratesSlot, firstCowboySlot, firstRoulette, firstBlackjack);
let controller = new Controller(casino,client);

controller.chooseGame(casino, firstPiratesSlot, firstCowboySlot, firstBlackjack, firstRoulette, client);
