import SortingAlgorithm from "./sorting-algorithm";
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

    function lomuto(arr: SortableArray, start: number, end: number, pivot: Function) {
        let pivotIndex = pivot(arr, start, end);
        let pivotValue = arr.getVal(pivotIndex);
        
        // Move pivot to end of array
        arr.swap(pivotIndex, end);

        pivotIndex = start-1;

        for (let i = start; i < end; i++) {
            if (arr.getVal(i) <= pivotValue) 
                arr.swap(i, ++pivotIndex);
        }

        arr.swap(++pivotIndex, end);
        return pivotIndex;
    }

    function hoare(arr: SortableArray, start: number, end: number, pivot: Function) {

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

    function first(arr: SortableArray, start: number, end: number): number {
        return start;
    }

    function last(arr: SortableArray, start: number, end: number): number {
        return end;
    }

    function middle(arr: SortableArray, start: number, end: number): number {
        return Math.floor((start + end)/2);
    }

    function random(arr: SortableArray, start: number, end: number): number {
        let rand = Math.floor(Math.random() * (end - start));
        return start + rand;
    }

    function median(arr: SortableArray, start: number, end: number): number {
        let i = start, j = Math.floor((start + end)/2), k = end;
        let I = arr.getVal(i), J = arr.getVal(j), K = arr.getVal(k);
        if ((I <= J && J <= K) || (K <= J && J <= I)) return j;
        if ((J <= I && I <= K) || (K <= I && I <= J)) return i;
        return k;
    }

    return {getPivot};
})();

class QuickSort implements SortingAlgorithm {
    private partition: Function;
    private pivot: Function;
    private name: string;

    constructor(partition: PartitionType, pivot: PivotType) {
        this.partition = PartitionFunctions.getPartition(partition);
        this.pivot = PivotFunctions.getPivot(pivot);
        this.name = `Quicksort (Partition: ${PartitionType[partition]}, Pivot: ${PivotType[pivot]})`;
    }

    sort(arr: SortableArray, start: number = 0, end: number = arr.getValues().length-1): Array<any> {
        this.quickSort(arr, 0, arr.getValues().length-1);
        return arr.getValues();
    }

    quickSort(arr: SortableArray, start: number, end: number): void {
        if (start < 0 || start >= end)
            return;

        let p = this.partition(arr, start, end, this.pivot);
        this.quickSort(arr, start, p-1);
        this.quickSort(arr, p+1, end);
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

    return {getBasicQuickSort, getQuickSort, getLomutoQuickSorts};
})();

export {QuickSortFactory};