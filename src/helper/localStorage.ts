export function getGeneration(): number | null{
    const value = localStorage.getItem("generation");
    if (!value){
        return null;
    }
    const generation = JSON.parse(value!);
    const type = typeof generation
    if (type === 'number'){
        return generation;
    }

    return null;
}

export function setGeneration(gen: number) {
    switch (gen){
        case 9:
            localStorage.setItem("generation", JSON.stringify(gen));
            break;
        default:
            throw new Error(`Invalid generation: ${gen}`);
    }
}

export function removeGeneration(){
    localStorage.removeItem("generation");
}