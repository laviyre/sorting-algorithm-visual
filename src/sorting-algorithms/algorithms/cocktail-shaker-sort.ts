import { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class CocktailShakerSort implements SortingAlgorithmAsync {
    async sort(arr: SortableArray): Promise<Array<any>> {
        let swapped = false;

        let count = 0;

        do {
            swapped = false;

            for (let i = 1 + count; i < arr.getValues().length - count; i++) {
                if (await arr.compare(i, i-1)) {
                    swapped = true;
                    await arr.swap(i, i-1);
                }
            }

            if (!swapped) break;

            for (let i = arr.getValues().length - 1 - count; i > count; i--) {
                if (await arr.compare(i, i-1)) {
                    swapped = true;
                    await arr.swap(i, i-1);
                }
            }

            count++;
        } while (swapped);

        return arr.getValues();
    }

    getName() { return "Cocktail Shaker Sort"; }
}

export default CocktailShakerSort;