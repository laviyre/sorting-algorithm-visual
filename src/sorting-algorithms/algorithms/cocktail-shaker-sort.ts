import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class CocktailShakerSort implements SortingAlgorithm {
    sort(arr: SortableArray): Array<any> {
        let swapped = false;

        do {
            swapped = false;

            for (let i = 1; i < arr.getValues().length; i++) {
                if (arr.compare(i, i-1)) {
                    swapped = true;
                    arr.swap(i, i-1);
                }
            }

            if (!swapped) break;

            for (let i = arr.getValues().length - 1; i > 0; i--) {
                if (arr.compare(i, i-1)) {
                    swapped = true;
                    arr.swap(i, i-1);
                }
            }
        } while (swapped);

        return arr.getValues();
    }
}

export default CocktailShakerSort;