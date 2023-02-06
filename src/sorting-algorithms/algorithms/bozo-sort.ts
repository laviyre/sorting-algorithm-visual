import  { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class BozoSort implements SortingAlgorithmAsync {
    async sort(arr: SortableArray) : Promise<Array<any>> {
        while (!await this.sorted(arr)) {
            await this.randomSwap(arr);
        }

        return arr.getValues();
    }

    async randomSwap(arr: SortableArray) {
        let i = Math.floor(Math.random() * arr.getValues().length);
        let j = Math.floor(Math.random() * arr.getValues().length);

        await arr.swap(i, j);
    }

    async sorted(arr: SortableArray) : Promise<boolean> {
        let i = 1;

        while (i < arr.getValues().length)
            if (await arr.compare(i, i++ - 1))
                return false;

        return true;
    }

    getName() { return "Bozo Sort"; } 
}

export default BozoSort;