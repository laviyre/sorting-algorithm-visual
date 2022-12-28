import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class MergeSort implements SortingAlgorithm {
    sort(arr: SortableArray): Array<any> {
        this.sortSubArray(arr, 0, arr.getValues().length);
        return arr.getValues();
    }

    sortSubArray(arr: SortableArray, start: number, end: number): Array<any> {
        if (end - start < 2) return arr.getValues().slice(start, end);

        let median = Math.floor((start + end) / 2);
        let left = this.sortSubArray(arr, start, median);
        let right = this.sortSubArray(arr, median, end);
        this.merge(arr, left, right, start);

        return arr.getValues().slice(start, end);
    }

    merge(arr: SortableArray, left: Array<any>, right: Array<any>, start: number) {
        let i = 0, j = 0;

        while (i + j < left.length + right.length) {
            let pos = start+i+j;

            if (i < left.length && j < right.length)
                arr.incComp(pos, start+i+j);

            if (i === left.length || (j !== right.length && right[j] < left[i])) 
                arr.setVal(pos, right[j++]);
            else
                arr.setVal(pos, left[i++]);
        }
    }

    getName() { return "Merge Sort"; }
}

export default MergeSort;