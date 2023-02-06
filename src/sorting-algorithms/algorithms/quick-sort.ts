import  { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

enum PartitionType {
    Lomuto,
    Hoare,
}

enum PivotType {
    Random,
    First,
    Middle,
    Last,
    Median,
}

const PartitionFunctions = (() => {
    function getPartition(partition: PartitionType): Function {
        if (partition === PartitionType.Lomuto) return lomuto;
        return hoare;
    }

    async function lomuto(arr: SortableArray, start: number, end: number, pivot: Function) {
        let pivotIndex = await pivot(arr, start, end);
        let pivotValue = await arr.getVal(pivotIndex);
        
        // Move pivot to end of array
        await arr.swap(pivotIndex, end);

        pivotIndex = start-1;

        for (let i = start; i < end; i++) {
            if (await arr.getVal(i) <= pivotValue) 
                await arr.swap(i, ++pivotIndex);
        }

        await arr.swap(++pivotIndex, end);
        return pivotIndex;
    }

    async function hoare(arr: SortableArray, start: number, end: number, pivot: Function) {
        let pivotValue = await arr.getVal(await pivot(arr, start, end));

        let left = start - 1;
        let right = end + 1;

        while (true) {
            while (await arr.getVal(++left) < pivotValue);
            while (await arr.getVal(--right) > pivotValue);
            if (left >= right) return right;

            await arr.swap(left, right);
        }
    }

    return {getPartition};
})();

const PivotFunctions = (() => {
    function getPivot(pivot: PivotType): Function {
        switch(pivot) {
            case PivotType.First:
                return first;
            case PivotType.Last:
                return last;
            case PivotType.Median:
                return median;
            case PivotType.Middle:
                return middle;
            case PivotType.Random: default: 
                return random;
        }
    }

    async function first(arr: SortableArray, start: number, end: number): Promise<number> {
        return start;
    }

    async function last(arr: SortableArray, start: number, end: number): Promise<number> {
        return end;
    }

    async function middle(arr: SortableArray, start: number, end: number): Promise<number> {
        return Math.floor((start + end)/2);
    }

    async function random(arr: SortableArray, start: number, end: number): Promise<number> {
        let rand = Math.floor(Math.random() * (end - start));
        return start + rand;
    }

    async function median(arr: SortableArray, start: number, end: number): Promise<number> {
        let i = start, j = Math.floor((start + end)/2), k = end;
        let I = await arr.getVal(i), J = await arr.getVal(j), K = await arr.getVal(k);
        if ((I <= J && J <= K) || (K <= J && J <= I)) return j;
        if ((J <= I && I <= K) || (K <= I && I <= J)) return i;
        return k;
    }

    return {getPivot};
})();

class QuickSort implements SortingAlgorithmAsync {
    private partition: Function;
    private pivot: Function;
    private name: string;

    constructor(partition: PartitionType, pivot: PivotType) {
        this.partition = PartitionFunctions.getPartition(partition);
        
        // Choosing last element in Hoare Partition leads to infinite loop so auto assign Random
        if (partition === PartitionType.Hoare && pivot === PivotType.Last)
            pivot = PivotType.Random;

        this.pivot = PivotFunctions.getPivot(pivot);
        this.name = `Quicksort (Partition: ${PartitionType[partition]}, Pivot: ${PivotType[pivot]})`;
    }

    async sort(arr: SortableArray, start: number = 0, end: number = arr.getValues().length-1): Promise<Array<any>> {
        await this.quickSort(arr, 0, arr.getValues().length-1);
        return arr.getValues();
    }

    async quickSort(arr: SortableArray, start: number, end: number): Promise<void> {
        if (start < 0 || start >= end)
            return;

        let p = await this.partition(arr, start, end, this.pivot);

        // Hoare Partition includes pivot whereas Lomuto does not
        let adjustment = this.partition === PartitionFunctions.getPartition(PartitionType.Hoare) ? 1 : 0;

        await this.quickSort(arr, start, p-1 + adjustment);
        await this.quickSort(arr, p+1, end);
    }

    getName() { return this.name; }
}

const QuickSortFactory = (() => {
    function getBasicQuickSort() {
        return new QuickSort(PartitionType.Lomuto, PivotType.First);
    }

    function getQuickSort(partition: PartitionType, pivot: PivotType) {
        return new QuickSort(partition, pivot);
    }

    function getLomutoQuickSorts() {
        let qs = [];
        for (let i = PivotType.Random; i <= PivotType.Median; i++)
            qs.push(new QuickSort(PartitionType.Lomuto, i));
        return qs;
    }

    function getHoareQuickSorts() {
        let qs = [];
        for (let i = PivotType.Random; i <= PivotType.Median; i++)
            if (i !== PivotType.Last)
                qs.push(new QuickSort(PartitionType.Hoare, i));
        return qs;
    }

    return {getBasicQuickSort, getQuickSort, getLomutoQuickSorts, getHoareQuickSorts};
})();

export {QuickSortFactory};