import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class BozoSort implements SortingAlgorithm {
    sort(arr: SortableArray) : Array<any> {
        while (!this.sorted(arr))
            this.randomSwap(arr);

        return arr.getValues();
    }

    randomSwap(arr: SortableArray) {
        let i = Math.floor(Math.random() * arr.getValues().length);
        let j = Math.floor(Math.random() * arr.getValues().length);

        arr.swap(i, j);
    }

    sorted(arr: SortableArray) : boolean {
        let i = 1;

        while (i < arr.getValues().length)
            if (arr.compare(i, i++ - 1))
                return false;

        return true;
    }

    getName() { return "Bozo Sort"; } 
}

export default BozoSort;