import SortingAlgorithm from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class HeapSort implements SortingAlgorithm {
    private isBottomUp: boolean

    constructor(isBottomUp: boolean) {
        this.isBottomUp = isBottomUp;
    }

    sort(arr: SortableArray): Array<any> {
        if (this.isBottomUp)
            this.heapifyBottomUp(arr);
        else
            this.heapifyTopDown(arr);

        for (let i = arr.getValues().length-1; i > 0; i--) {
            arr.swap(0, i);
            this.siftDown(arr, 0, i-1);
        }

        return arr.getValues();
    }

    heapifyBottomUp(arr: SortableArray): void {
        for (let i = Math.floor((arr.getValues().length-2)/2); i>=0; i--)
            this.siftDown(arr, i, arr.getValues().length-1)
    }

    heapifyTopDown(arr: SortableArray): void {

    }

    siftDown(arr: SortableArray, start: number, end: number) {
        let curr = start;

        while (2*curr+1 <= end) {
            let largestIndex = curr;

            if (arr.compare(curr, 2*curr + 1))
                largestIndex = 2*curr+1;

            if (2*curr+2 <= end && arr.compare(largestIndex, 2*curr+2))
                largestIndex = 2*curr+2;

            if (curr === largestIndex) return;

            arr.swap(curr, largestIndex);
            curr = largestIndex;
        }
    }

    getName() {
        return this.isBottomUp ? "Heapsort (Bottom up)" : "Heapsort (Top down)";
    }
}

export default HeapSort;