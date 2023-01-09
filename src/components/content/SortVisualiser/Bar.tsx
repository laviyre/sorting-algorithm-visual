import ContentCSS from "./../Content.module.css";

interface BarProps {
    value: number,
    min: number,
    max: number,
    color: string,
}

function Bar({value, min, max, color}: BarProps) {
    const height: string = `${(value - min) / (max - min) * 100}%`;
    const colorStyle: string = color !== "" ? `var(--${color})` : "gray";

    const style = {"backgroundColor": colorStyle, "height": height};

    return(
        <div className = {ContentCSS.bar} style = {style}></div>
    );
}

export default Bar;