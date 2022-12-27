import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class GnomeSort implements SortingAlgorithm {
    sort(arr: SortableArray): Array<any> {
        if (arr.getValues().length == 0) return [];
        let pos = 0;

        while (pos < arr.getValues().length) {
            if (pos === 0 || arr.compare(pos-1, pos))
                pos++;
            else 
                arr.swap(pos, --pos);
        }

        return arr.getValues();
    }
}

export default GnomeSort;