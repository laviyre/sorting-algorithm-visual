import { SliderInstanceProps } from "./Input";

interface SliderProps {
    min: number,
    max: number,
}

function Slider({name, onChange, inputProperties} : SliderInstanceProps) {
    const min = inputProperties.min;
    const max = inputProperties.max;

    return (
        <input name = {name} id = {name} type = "range" min = {min} max = {max}/>
    )
}

export default Slider;
export type {SliderProps};