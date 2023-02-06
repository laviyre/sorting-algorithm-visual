import  { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class HeapSort implements SortingAlgorithmAsync {
    private isBottomUp: boolean

    constructor(isBottomUp: boolean) {
        this.isBottomUp = isBottomUp;
    }

    async sort(arr: SortableArray): Promise<Array<any>> {
        if (this.isBottomUp)
            await this.heapifyBottomUp(arr);
        else
            await this.heapifyTopDown(arr, arr.getValues().length);

        for (let i = arr.getValues().length-1; i > 0; i--) {
            await arr.swap(0, i);
            await this.siftDown(arr, 0, i-1);
        }

        return arr.getValues();
    }

    async heapifyBottomUp(arr: SortableArray): Promise<void> {
        for (let i = Math.floor((arr.getValues().length-2)/2); i>=0; i--)
            await this.siftDown(arr, i, arr.getValues().length-1)
    }

    async siftDown(arr: SortableArray, start: number, end: number): Promise<void> {
        let curr = start;

        while (2*curr+1 <= end) {
            let largestIndex = curr;

            if (await arr.compare(curr, 2*curr + 1))
                largestIndex = 2*curr+1;

            if (2*curr+2 <= end && await arr.compare(largestIndex, 2*curr+2))
                largestIndex = 2*curr+2;

            if (curr === largestIndex) return;

            await arr.swap(curr, largestIndex);
            curr = largestIndex;
        }
    }


    async heapifyTopDown(arr: SortableArray, end: number): Promise<void> {
        for (let i = 1; i < end; i++) {
            await this.siftUp(arr, 0, i);
        }
    }

    async siftUp(arr: SortableArray, start: number, end: number): Promise<void> {
        let child = end;

        while (child > start) {
            let parent = Math.floor((child-1)/2);

            if (await arr.compare(child, parent))
                return;

            await arr.swap(parent, child);
            child = parent;
        }
    }

    getName(): string {
        return this.isBottomUp ? "Heapsort (Bottom up)" : "Heapsort (Top down)";
    }
}

export default HeapSort;