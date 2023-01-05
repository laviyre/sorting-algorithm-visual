import Button from "./Button/Button";
import "./Sidebar.module.css";

function Sidebar() {
    return (
        <aside>
            <Button color = "red" name = {"START"} active = {true} click = {() => console.log("hello")}></Button>
        </aside>
    )
}

export default Sidebar