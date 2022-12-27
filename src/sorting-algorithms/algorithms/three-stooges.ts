import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class ThreeStooges implements SortingAlgorithm {
    sort(arr: SortableArray, start: number = 0, end = arr.getValues().length-1): Array<any> {
        if (arr.compare(end, start))
            arr.swap(end, start);

        if (end - start > 1) {
            const prop = Math.floor((end - start + 1)/3);
            this.sort(arr, start, end - prop);
            this.sort(arr, start + prop, end);
            this.sort(arr, start, end - prop);
        }

        return arr.getValues();
    }
}

export default ThreeStooges;