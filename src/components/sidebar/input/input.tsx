import Dropdown from "./Dropdown";
import Slider from "./Slider";
import { DropdownProps } from "./Dropdown";
import { SliderProps } from "./Slider";
import InputCSS from "./Input.module.css";

interface BaseInputProps {
    name: string,
    onChange: Function,
}

interface DropdownInstanceProps extends BaseInputProps {
    inputProperties: DropdownProps,
}

interface SliderInstanceProps extends BaseInputProps {
    inputProperties: SliderProps,
}

function isSliderInstance(inputProperties: SliderProps | DropdownProps): boolean {
    return "min" in inputProperties && "max" in inputProperties;
}

type InputProps = DropdownInstanceProps | SliderInstanceProps;

function Input({name, onChange, inputProperties} : InputProps) {
    let inputInstance;
    if (isSliderInstance(inputProperties)) 
        inputInstance = <Slider name = {name} onChange = {onChange} inputProperties = {inputProperties as SliderProps}/>
    else
        inputInstance = <Dropdown name = {name} onChange = {onChange} inputProperties = {inputProperties as DropdownProps}/>

    return(<>
        <label className = {InputCSS.text} htmlFor = {name}>{name}</label>
        {inputInstance}
    </>);
}


export default Input;
export type {DropdownInstanceProps, SliderInstanceProps};