import { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class InsertionSort implements SortingAlgorithmAsync {
    async sort(arr: SortableArray): Promise<Array<any>> {
        for (let i = 0; i < arr.getValues().length; i++) {
            for (let j = i; j > 0; j--) {
                if (await arr.compare(j, j-1))
                    await arr.swap(j, j-1);
                else
                    break;
            }
        }

        return arr.getValues();
    }

    getName() { return "Insertion Sort"; }
}

export default InsertionSort;