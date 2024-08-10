import { getGeneration, removeGeneration, setGeneration } from "../helper/localStorage";

export default function(){
    const generation = getGeneration();
    return <div className="my-3 input-group">
        <span className="input-group-text">Pokemon Generation</span>
        <select aria-placeholder="Select a Generation:" className="form-control" onChange={(e => update(e.target.value))}>
            <option selected={generation === null} value={""}>None</option>
            <option selected={generation === 9} value={9}>Gen 9</option>
        </select>
    </div>
}

const update = (value: string) => {
    if (!value || value === ''){
        removeGeneration();
        return;
    }

    setGeneration(JSON.parse(value));
}