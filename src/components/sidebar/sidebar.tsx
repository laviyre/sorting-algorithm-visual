import Button from "./Button/Button";
import Settings from "./Settings/Settings";
import "./Sidebar.module.css";

function Sidebar() {
    return (
        <aside>
            <Button color = "red" name = {"START"} active = {true} click = {() => console.log("start")}></Button>
            <Settings></Settings>
        </aside>
    )
}

export default Sidebar