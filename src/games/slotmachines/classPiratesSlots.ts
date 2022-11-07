import { SlotMachine } from "./classSlotMachine";

export class PiratesSlots extends SlotMachine{
    
    constructor(pTheme: string, pBetMin: number, pWinProbability: number, pWinNumbers: number[], pBonus: number){
        super(pTheme, pBetMin, pWinProbability, pWinNumbers, pBonus);
    };
    
}

let pirateTest = new PiratesSlots ("Piratas01",10,3,[1,2,3],500)

pirateTest.play()


