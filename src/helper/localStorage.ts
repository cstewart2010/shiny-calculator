export function getGenerationLocal(): number | null {
    return getLocal("generation");
}

export function setGenerationLocal(gen: number) {
    switch (gen){
        case 9:
            setLocal("generation", gen);
            break;
        default:
            throw new Error(`Invalid generation: ${gen}`);
    }
}

export function getLocal(itemName: string): number | null {
    const value = localStorage.getItem(itemName);
    if (!value){
        return null;
    }
    const item = JSON.parse(value!);
    const type = typeof item
    if (type === 'number'){
        return item;
    }

    return null;
}

export function setLocal(itemName:string, value: number){
    localStorage.setItem(itemName, JSON.stringify(value));
}

export function removeGenerationLocal(){
    localStorage.removeItem("generation");
}