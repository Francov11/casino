import { SlotMachine } from "./classSlotMachine";


export class CowboysSlots extends SlotMachine{
    private cowboyBonus: SlotMachine;
    
    constructor(pTheme: string, pBetMin: number, pWinProbability: number, pWinNumbers: number[]){
        super(pTheme, pBetMin, pWinProbability, pWinNumbers);
    };

}