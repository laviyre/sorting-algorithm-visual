import SettingsCSS from "./Settings.module.css";
import Input from "../Input/Input";


function Settings() {
    return(
        <form className = {SettingsCSS.settings}>
            <Input name = "Mode" onChange = {() => {}} inputProperties = {{modes: ["Normal", "weird"]}}></Input>
            <Input name = "Algorithm" onChange = {() => {}} inputProperties = {{modes: ["Insertion Sort", "Bubble Sort"]}}></Input>
            <Input name = "Size" onChange = {() => {}} inputProperties = {{min: 1, max: 1000}}></Input>
            <Input name = "Speed" onChange = {() => {}} inputProperties = {{min: 1, max: 1000}}></Input>
        </form>
    );
}

export default Settings;