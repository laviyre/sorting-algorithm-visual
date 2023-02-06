import { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class MergeSort implements SortingAlgorithmAsync {
    async sort(arr: SortableArray): Promise<Array<any>> {
        await this.sortSubArray(arr, 0, arr.getValues().length);
        return arr.getValues();
    }

    async sortSubArray(arr: SortableArray, start: number, end: number): Promise<Array<any>> {
        if (end - start < 2) return arr.getValues().slice(start, end);

        let median = Math.floor((start + end) / 2);
        let left = await this.sortSubArray(arr, start, median);
        let right = await this.sortSubArray(arr, median, end);
        await this.merge(arr, left, right, start);

        return arr.getValues().slice(start, end);
    }

    async merge(arr: SortableArray, left: Array<any>, right: Array<any>, start: number) {
        let i = 0, j = 0;

        while (i + j < left.length + right.length) {
            let pos = start+i+j;

            if (i < left.length && j < right.length)
                await arr.incComp(pos, start+i+j);

            if (i === left.length || (j !== right.length && right[j] < left[i])) 
                await arr.setVal(pos, right[j++]);
            else
                await arr.setVal(pos, left[i++]);
        }
    }

    getName() { return "Merge Sort"; }
}

export default MergeSort;