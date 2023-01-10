import React, { useState} from "react";
import { SliderInstanceProps } from "./Input";
import InputCSS from "./Input.module.css";

interface SliderProps {
    min: number,
    max: number,
}

function Slider({name, value, inputProperties} : SliderInstanceProps) {
    const min = inputProperties.min;
    const max = inputProperties.max;

    function localChange(event: React.ChangeEvent<HTMLInputElement>): void {
        let val: number = +event.target.value;
        if (val < min) val = min;
        if (val > max) val = max;
        value.onChange(val);
    }

    return (
        <div className = {InputCSS["slider-parent"]}>
            <input name = {name} id = {name} type = "range" min = {min} max = {max} value = {value.val} onChange = {localChange}/>
            <input className = {InputCSS["slider-text"]}type = "number" min = {min} max = {max} value = {value.val} onChange = {localChange}/>
        </div>
    )
}

export default Slider;
export type {SliderProps};