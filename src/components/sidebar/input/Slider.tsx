import React, { useState} from "react";
import { SliderInstanceProps } from "./Input";
import InputCSS from "./Input.module.css";

interface SliderProps {
    min: number,
    max: number,
}

function Slider({name, onChange, inputProperties} : SliderInstanceProps) {
    const min = inputProperties.min;
    const max = inputProperties.max;

    const [value, setValue] = useState(min);

    function localChange(event: React.ChangeEvent<HTMLInputElement>): void {
        let val: number = +event.target.value;
        if (val < min) val = min;
        if (val > max) val = max;
        setValue(val);
    }

    return (
        <div className = {InputCSS["slider-parent"]}>
            <input name = {name} id = {name} type = "range" min = {min} max = {max} value = {value} onChange = {localChange}/>
            <input className = {InputCSS["slider-text"]}type = "number" min = {min} max = {max} value = {value} onChange = {localChange}/>
        </div>
    )
}

export default Slider;
export type {SliderProps};