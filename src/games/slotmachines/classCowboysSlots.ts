import { SlotMachine } from "./classSlotMachine";


export class CowboysSlots extends SlotMachine{
    
    constructor(pTheme: string, pBetMin: number, pWinProbability: number, pWinNumbers: number[], pBonus: number){
        super(pTheme, pBetMin, pWinProbability, pWinNumbers, pBonus);
    };

    public colors(x:SlotMachine){
        x.play()
    }

}