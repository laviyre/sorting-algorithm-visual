import {SortableArray} from "../sortable-array";

interface SortingAlgorithmAsync {
    sort(values: SortableArray): Promise<Array<any>>;
    getName(): string;
}

export type {SortingAlgorithmAsync};