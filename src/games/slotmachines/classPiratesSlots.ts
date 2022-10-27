import { SlotMachine } from "./classSlotMachine";

export class PiratesSlots extends SlotMachine{
    private piratesBonus: number;
    
    constructor(pTheme: string, pBetMin: number, pWinProbability: number, pWinNumbers: number[]){
        super(pTheme, pBetMin, pWinProbability, pWinNumbers);
    };



}

let pirateTest = new PiratesSlots ("Piratas01",10,3,[1,2,3])

pirateTest.play()