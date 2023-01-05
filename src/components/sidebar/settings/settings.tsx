import SettingsCSS from "./Settings.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";


function Settings() {
    return(
        <div className = {SettingsCSS.settings}>
            <Button name = {"SHUFFLE"} color = {"yellow"} active = {true} click = {() => console.log("shuffle")}></Button>
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <Input></Input>
        </div>
    );
}

export default Settings;