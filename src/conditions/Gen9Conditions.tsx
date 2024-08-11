import { useState } from "react";
import { getEffectiveRate } from "../helper/math";
import { getLocal, setLocal } from "../helper/localStorage";

export default function Gen9Conditions(){
    const defaultShinyCharmRolls = getLocal("shinyCharmRolls") || 1;
    const defaultSparklingPowerRolls = getLocal("sparklingPowerRolls") || 0;
    const defaultStandardOutbreakRolls = getLocal("standardOutbreakRolls") || 0;
    const defaultWildCounter = getLocal("wildCounter") || 1;
    const [shinyCharmRolls, setShinyCharmRolls] = useState(defaultShinyCharmRolls);
    const [sparklingPowerRolls, setSparklingPowerRolls] = useState(defaultSparklingPowerRolls);
    const [standardOutbreakRolls, setStandardOutbreakRolls] = useState(defaultStandardOutbreakRolls);
    const [wildCounter, setWildCounter] = useState(defaultWildCounter);
    const updateRolls = (fn: React.Dispatch<React.SetStateAction<number>>, storageName: string, newValue: string) => {
        const value = Number.parseInt(newValue);
        fn(value);
        setLocal(storageName, value);
    }

    return <div className="my-2">
        <p>
            There is a {getEffectiveRate(wildCounter * (shinyCharmRolls + sparklingPowerRolls + standardOutbreakRolls), 9)}%
            chance of encountering a shiny pokemon with the current parameters.
        </p>
        <div className="input-group">
            <span className="input-group-text">Shiny Charm?</span>
            <select className="form-control" onChange={e => updateRolls(setShinyCharmRolls, "shinyCharmRolls", e.target.value)}>
                <option value="3" selected={defaultShinyCharmRolls === 3}>Yes</option>
                <option value="1" selected={defaultShinyCharmRolls === 1}>No</option>
            </select>
        </div>
        <div className="input-group">
            <span className="input-group-text">Sparkling Power?</span>
            <select className="form-control" onChange={e => updateRolls(setSparklingPowerRolls, "sparklingPowerRolls", e.target.value)}>
                <option value="1" selected={defaultSparklingPowerRolls === 1}>Lv. 1</option>
                <option value="2" selected={defaultSparklingPowerRolls === 2}>Lv. 2</option>
                <option value="3" selected={defaultSparklingPowerRolls === 3}>Lv. 3</option>
                <option value="0" selected={defaultSparklingPowerRolls === 0}>No</option>
            </select>
        </div>
        <div className="input-group">
            <span className="input-group-text">Outbreak Counter?</span>
            <select className="form-control" onChange={e => updateRolls(setStandardOutbreakRolls, "standardOutbreakRolls", e.target.value)}>
                <option value="1" selected={defaultStandardOutbreakRolls === 1}>About 30 defeated</option>
                <option value="2" selected={defaultStandardOutbreakRolls === 2}>About 60 defeated</option>
                <option value="0" selected={defaultStandardOutbreakRolls === 0}>None</option>
            </select>
        </div>
        <div className="input-group">
            <span className="input-group-text">Pokemon Encountered At Current Odds</span>
            <input type="number" className="form-control" min={1} defaultValue={defaultWildCounter} onInput={e => updateRolls(setWildCounter, "wildCounter", e.currentTarget.value)} />
        </div>
    </div>
}