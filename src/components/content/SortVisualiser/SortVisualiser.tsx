import DisplayableArray from "../../../sorting-algorithms/displayable-array";
import ContentCSS from "./../Content.module.css"
import Bar from "./Bar";

interface SortProps {
    arr: DisplayableArray;
}

function SortVisualiser({arr}: SortProps) {
    return(
        <section className = {ContentCSS.sort}>
            {arr.getColumns().map((bar, i) => {
                return <Bar value = {bar.val} max = {arr.maxValue()} min = {arr.minValue()} color = {bar.color} key = {i}/>
            })}
        </section>
    );
}

export default SortVisualiser;