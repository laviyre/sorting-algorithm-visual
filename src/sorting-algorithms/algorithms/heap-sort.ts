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
            this.heapifyTopDown(arr, arr.getValues().length);

        for (let i = arr.getValues().length-1; i > 0; i--) {
            arr.swap(0, i);
            if (this.isBottomUp) 
                this.siftDown(arr, 0, i-1);
            else
                this.heapifyTopDown(arr, i);
        }

        return arr.getValues();
    }

    heapifyBottomUp(arr: SortableArray): void {
        for (let i = Math.floor((arr.getValues().length-2)/2); i>=0; i--)
            this.siftDown(arr, i, arr.getValues().length-1)
    }

    siftDown(arr: SortableArray, start: number, end: number): void {
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


    heapifyTopDown(arr: SortableArray, end: number): void {
        for (let i = 1; i < end; i++) {
            this.siftUp(arr, 0, i);
        }
    }

    siftUp(arr: SortableArray, start: number, end: number): void {
        let child = end;

        while (child > start) {
            let parent = Math.floor((child-1)/2);

            if (arr.compare(child, parent))
                return;

            arr.swap(parent, child);
            child = parent;
        }
    }

    getName(): string {
        return this.isBottomUp ? "Heapsort (Bottom up)" : "Heapsort (Top down)";
    }
}

export default HeapSort;