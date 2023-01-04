import React from "react";
import HeaderCSS from "./header.module.css";

interface Name {
    name: string
}

function Header(props: Name) {
    return (
        <header className = {HeaderCSS.head}><h1>{props.name}</h1></header>
    )
}

export default Header;