import { CounterProps } from "../helper/interfaces";
import Gen9Conditions from "../conditions/Gen9Conditions";

export default function Counter(props: CounterProps){
    switch (props.generation){
        case 9:
            return <Gen9Conditions />
        default:
            return <h2>Please select a Pokemon Generation</h2>
    }
}