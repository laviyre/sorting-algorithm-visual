import {SortableArray} from "../sortable-array";

interface SortingAlgorithm {
    sort(values: SortableArray): Array<any>;
}

export default SortingAlgorithm;