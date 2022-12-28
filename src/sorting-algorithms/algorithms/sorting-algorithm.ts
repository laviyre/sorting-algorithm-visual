import {SortableArray} from "../sortable-array";

interface SortingAlgorithm {
    sort(values: SortableArray): Array<any>;
    getName(): string;
}

export default SortingAlgorithm;