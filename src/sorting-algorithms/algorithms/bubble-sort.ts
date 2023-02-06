import  { SortingAlgorithmAsync } from "./sorting-algorithm";
import {SortableArray} from "../sortable-array";

class BubbleSort implements SortingAlgorithmAsync {
    async sort(arr: SortableArray): Promise<Array<any>> {
        for (let i = arr.getValues().length; i > 0; i--) {
            for (let j = 1; j < i; j++) {
                if (await arr.compare(j,j-1)) {
                    await arr.swap(j, j-1); 
                }
            }
        }
    
        return arr.getValues();
    }

    getName() { return "Bubble Sort"; }
}

export default BubbleSort;