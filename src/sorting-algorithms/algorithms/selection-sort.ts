import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class SelectionSort implements SortingAlgorithm {
    sort(arr: SortableArray): Array<any> {
        for (let i = 0; i < arr.getValues().length; i++) {
            let k = i;

            for (let j = i; j < arr.getValues().length; j++) {
                if (arr.compare(j, k))
                    k = j;
            }

            arr.swap(i, k);
        }

        return arr.getValues();
    }

    getName(): string { return "Selection Sort"; }
}

export default SelectionSort;