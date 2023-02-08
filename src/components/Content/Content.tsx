import SortVisualiser from "./SortVisualiser/SortVisualiser";
import ContentCSS from "./Content.module.css";
import DisplayableArray from "../../sorting-algorithms/displayable-array";

interface ContentProps {
    arr: DisplayableArray
    comparisons: number,
    arrayAccesses: number,
}

function Content({arr, comparisons, arrayAccesses}: ContentProps) {
    return (
        <article className = {ContentCSS.content}>
            <div></div>
            <div>Comparisons: {comparisons}</div>
            <div>Array Accesses: {arrayAccesses}</div>
            <SortVisualiser arr = {arr}/>
        </article>
    );
}

export default Content