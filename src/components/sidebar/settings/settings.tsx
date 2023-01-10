import SettingsCSS from "./Settings.module.css";
import Input from "../Input/Input";
import { StateProps } from "../Input/Input";

interface SettingsProps {
    shuffleMode: StateProps,
    algorithm: StateProps,
    size: StateProps,
    speed: StateProps,
    algorithms: Array<string>,
    shuffleModes: Array<string>,
}


function Settings({shuffleMode, algorithm, size, speed, algorithms, shuffleModes}: SettingsProps) {

    return(
        <form className = {SettingsCSS.settings}>
            <Input name = "Shuffle Mode" value = {shuffleMode} inputProperties = {{modes: shuffleModes}}></Input>
            <Input name = "Algorithm" value = {algorithm} inputProperties = {{modes: algorithms}}></Input>
            <Input name = "Size" value = {size} inputProperties = {{min: 1, max: 1000}}></Input>
            <Input name = "Speed" value = {speed} inputProperties = {{min: 1, max: 1000}}></Input>
        </form>
    );
}

export default Settings;
export type {SettingsProps};