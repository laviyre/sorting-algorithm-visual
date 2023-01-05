import React from "react";
import Button from "./Button/Button";

function Sidebar() {
    return (
        <aside>
            <Button color = "red" name = {"START"} active = {true} click = {() => console.log("hello")}></Button>
        </aside>
    )
}

export default Sidebar