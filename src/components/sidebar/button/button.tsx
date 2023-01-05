import ButtonCSS from "./Button.module.css";

interface ButtonProps {
    name: string,
    color: string,
    active: boolean,
    click: Function,
}

function Button({name, color, active, click} : ButtonProps) {
    const className = `${ButtonCSS[color]} ${(active ? ButtonCSS["active"] : "")}`;
    console.log(className);

    return(
        <button className = {className} onClick = {() => {if (active) click();}}>{name}</button>
    );
}

export default Button;