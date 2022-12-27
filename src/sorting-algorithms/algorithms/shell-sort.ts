import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class ShellSort implements SortingAlgorithm {
    sort(arr: SortableArray): Array<any> {
        let m = 2;
        let n = Math.floor(arr.getValues().length/m);

        while (n > 0) {
            for (let i = n; i < arr.getValues().length; i++) {
                for (let j = i; j >= n; j-=n) {
                    if (arr.compare(j, j-n))
                        arr.swap(j, j-n);
                    else
                        break;
                }
            }

            m *= 2;
            n = Math.floor(arr.getValues().length/m);
        }

        return arr.getValues();
    }
}

export default ShellSort;