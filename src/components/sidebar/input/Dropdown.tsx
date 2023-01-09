import { DropdownInstanceProps } from "./Input"
import InputCSS from "./Input.module.css";

interface DropdownProps {
    modes: Array<string>,
}

function Dropdown({name, onChange, inputProperties} : DropdownInstanceProps) {
    return (
        <div>
            <select id = {name} className = {InputCSS.select}>
                {inputProperties.modes.map((mode, i) => 
                    <option value = {mode} key = {i}>{mode}</option>
                )}
            </select>
        </div>
    )
}

export default Dropdown
export type {DropdownProps}