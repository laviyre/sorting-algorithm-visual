import Button from "./Button/Button";
import Settings, { SettingsProps } from "./Settings/Settings";
import "./Sidebar.module.css";

interface ButtonInfo {
    active: boolean,
    fun: Function,
}

interface SidebarProps extends SettingsProps {
    start: ButtonInfo,
    shuffle: ButtonInfo,
}

function Sidebar({start, shuffle, shuffleMode, algorithm, size, speed, algorithms, shuffleModes}: SidebarProps) {
    return (
        <aside>
            <Button color = "red" name = {"START"} active = {start.active} click = {start.fun}></Button>
            <Button name = {"SHUFFLE"} color = {"yellow"} active = {shuffle.active} click = {shuffle.fun}></Button>
            <Settings shuffleMode={shuffleMode} algorithm = {algorithm} size = {size} 
            speed = {speed} active = {shuffle.active} algorithms = {algorithms} shuffleModes = {shuffleModes}></Settings>
        </aside>
    )
}

export default Sidebar