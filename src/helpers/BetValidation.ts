export function BetValidation(player: Client, bet: number, minBet:number){
    let a = player.getCashAmount()
    if(a >= bet && a > minBet){
        return true;
    } else {
        return false;
    }
}