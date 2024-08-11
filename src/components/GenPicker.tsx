import { GenPickerProps } from "../helper/interfaces";

export default function GenPicker(props: GenPickerProps){
    return <div className="my-3 input-group">
        <span className="input-group-text">Pokemon Generation</span>
        <select className="form-control" onChange={props.onChange}>
            <option selected={props.generation === null} value={""}>None</option>
            <option selected={props.generation === 9} value={9}>Gen 9</option>
        </select>
    </div>
}