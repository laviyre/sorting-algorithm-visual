import  { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class BogoSort implements SortingAlgorithmAsync {
    async sort(arr: SortableArray): Promise<Array<any>> {
        while (!await this.sorted(arr))
            await this.shuffle(arr);

        return arr.getValues();
    }

    async shuffle(arr: SortableArray): Promise<void> {
        for (let i = 0; i < arr.getValues().length; i++) {
            let j = Math.floor(Math.random() * (i+1));
            await arr.swap(i, j);
        }
    }

    async sorted(arr: SortableArray): Promise<boolean> {
        let i = 1;
        while (i < arr.getValues().length)
        {
            if (await arr.compare(i, i-1))
                return false;

            i++;
        }

        return true;
    }

    getName() { return "Bogo Sort"; }
}

export default BogoSort;