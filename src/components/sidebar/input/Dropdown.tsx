import { DropdownInstanceProps } from "./Input"

interface DropdownProps {
    modes: Array<string>,
}

function Dropdown({name, onChange, inputProperties} : DropdownInstanceProps) {
    return (
        <div>
            <select id = {name}>
                {inputProperties.modes.map((mode, i) => 
                    <option value = {mode} key = {i}>{mode}</option>
                )}
            </select>
        </div>
    )
}

export default Dropdown
export type {DropdownProps}