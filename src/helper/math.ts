const RATES = {
    gen9: 0.00024414062
}

export function getEffectiveRate(rolls: number, generation: number) {
    if (!Number.isInteger(rolls) || rolls < 0){
        console.log(`rolls parameter should be a positive integer: passed in ${rolls}`);
        return 0;
    }

    let rate: number;
    switch (generation){
        case 9:
            rate = RATES.gen9
            break;
        default:
            console.log(`Unsupported Pokemon Generation (${generation})`);
            return 0;
    }

    const complement = 1 - rate;
    const effectiveComplement = Math.pow(complement, rolls);

    return Math.round(10000*(1 - effectiveComplement))/100;
}