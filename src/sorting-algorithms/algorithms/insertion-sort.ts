import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class InsertionSort implements SortingAlgorithm {
    sort(arr: SortableArray): Array<any> {
        for (let i = 0; i < arr.getValues().length; i++) {
            for (let j = i; j > 0; j--) {
                if (arr.compare(j, j-1))
                    arr.swap(j, j-1);
            }
        }

        return arr.getValues();
    }

    getName() { return "Insertion Sort"; }
}

export default InsertionSort;