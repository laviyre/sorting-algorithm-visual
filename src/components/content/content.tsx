import SortVisualiser from "./SortVisualiser/SortVisualiser";
import ContentCSS from "./Content.module.css";
import DisplayableArray from "../../sorting-algorithms/displayable-array";

interface ContentProps {
    arr: DisplayableArray
}

function Content({arr}: ContentProps) {
    return (
        <article className = {ContentCSS.content}>
            <SortVisualiser arr = {arr}/>
        </article>
    );
}

export default Content