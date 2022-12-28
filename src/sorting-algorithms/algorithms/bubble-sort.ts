import SortingAlgorithm from "./sorting-algorithm";
import {SortableArray} from "../sortable-array";

class BubbleSort implements SortingAlgorithm {
    sort(arr: SortableArray): Array<any> {
        for (let i = arr.getValues().length; i > 0; i--) {
            for (let j = 1; j < i; j++) {
                if (arr.compare(j,j-1))
                    arr.swap(j, j-1);
            }
        }
    
        return arr.getValues();
    }

    getName() { return "Bubble Sort"; }
}

export default BubbleSort;