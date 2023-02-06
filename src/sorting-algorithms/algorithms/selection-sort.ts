import { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class SelectionSort implements SortingAlgorithmAsync {
    async sort(arr: SortableArray): Promise<Array<any>> {
        for (let i = 0; i < arr.getValues().length; i++) {
            let k = i;

            for (let j = i; j < arr.getValues().length; j++) {
                if (await arr.compare(j, k))
                    k = j;
            }

            if (i !== k)
                await arr.swap(i, k);
        }

        return arr.getValues();
    }

    getName(): string { return "Selection Sort"; }
}

export default SelectionSort;