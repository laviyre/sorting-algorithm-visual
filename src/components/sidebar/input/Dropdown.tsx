import { DropdownInstanceProps } from "./Input"
import InputCSS from "./Input.module.css";

interface DropdownProps {
    modes: Array<string>,
}

function Dropdown({name, value, inputProperties} : DropdownInstanceProps) {
    function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
        console.log(value.val);
        console.log(event.target.value);
        value.onChange(event.target.value);
        console.log(value.val);
    }

    return (
        <div>
            <select id = {name} className = {InputCSS.select} value = {value.val} onChange = {onChange}>
                {inputProperties.modes.map((mode, i) => 
                    <option value = {mode} key = {i}>{mode}</option>
                )}
            </select>
        </div>
    )
}

export default Dropdown
export type {DropdownProps}