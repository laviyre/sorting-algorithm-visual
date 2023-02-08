import React from "react";
import { SliderInstanceProps } from "./Input";
import InputCSS from "./Input.module.css";

interface SliderProps {
    min: number,
    max: number,
}

function Slider({name, value, inputProperties} : SliderInstanceProps) {
    const min = inputProperties.min;
    const max = inputProperties.max;

    const logMin = Math.log10(min);
    const logMax = Math.log10(inputProperties.max);

    function localChangeText(event: React.ChangeEvent<HTMLInputElement>): void {
        let val: number = +event.target.value;
        if (val < min) val = min;
        if (val > max) val = max;
        value.onChange(val);
    }

    function localChangeInput(event: React.ChangeEvent<HTMLInputElement>): void {
        let logVal = +event.target.value;
        let val = Math.ceil(Math.pow(10, logVal));
        value.onChange(val);
    }

    return (
        <div className = {InputCSS["slider-parent"]}>
            <input name = {name} id = {name} step = {0.0001} type = "range" min = {logMin} max = {logMax} value = {Math.log10(value.val)} onChange = {localChangeInput}/>
            <input className = {InputCSS["slider-text"]}type = "number" min = {min} max = {max} value = {value.val} onChange = {localChangeText}/>
        </div>
    )
}

export default Slider;
export type {SliderProps};