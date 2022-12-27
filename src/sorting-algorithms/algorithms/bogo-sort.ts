import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class BogoSort implements SortingAlgorithm {
    sort(arr: SortableArray): Array<any> {
        while (!this.sorted(arr))
            this.shuffle(arr);

        return arr.getValues();
    }

    shuffle(arr: SortableArray): void {
        for (let i = 0; i < arr.getValues().length; i++) {
            let j = Math.floor(Math.random() * (i+1));
            arr.swap(i, j);
        }
    }

    sorted(arr: SortableArray): boolean {
        let i = 1;
        while (i < arr.getValues().length)
        {
            if (arr.compare(i, i-1))
                return false;

            i++;
        }

        return true;
    }
}

export default BogoSort;