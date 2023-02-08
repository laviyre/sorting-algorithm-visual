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

interface SettingsPropsInstance extends SettingsProps {
    active: boolean,
}

function Settings({shuffleMode, algorithm, size, speed, active, algorithms, shuffleModes}: SettingsPropsInstance) {

    return(
        <form className = {SettingsCSS.settings + ` ${active ? SettingsCSS.active : ""}`}>
            <Input name = "Shuffle Mode" value = {shuffleMode} inputProperties = {{modes: shuffleModes}}></Input>
            <Input name = "Algorithm" value = {algorithm} inputProperties = {{modes: algorithms}}></Input>
            <Input name = "Size" value = {size} inputProperties = {{min: 1, max: 3000}}></Input>
            <Input name = "Speed" value = {speed} inputProperties = {{min: 1, max: 1000000}}></Input>
        </form>
    );
}

export default Settings;
export type {SettingsProps};