import {DetailsManager, EmptyDetails} from "./util/details-manager";

class SortableArray {
    private comparisons: number;
    private arrayAccesses: number;
    private values: Array<any>;
    private details: DetailsManager;

    constructor(values: Array<any>, details: DetailsManager) {
        this.comparisons = 0;
        this.arrayAccesses = 0;
        this.values = values;
        this.details = details;
    }

    public incComp(i: number, j: number): void {
        this.comparisons++;
    }

    public incAA(i: number): void {
        this.arrayAccesses++;
    }

    public getVal(i: number): number {
        this.incAA(i);
        return this.values[i];
    }

    public setVal(i: number, val: number): void {
        this.incAA(i);
        this.values[i] = val;
    }

    public swap(i: number, j: number): void {
        let temp = this.getVal(i);
        this.setVal(i, this.getVal(j));
        this.setVal(j, temp);
    }

    public compare(i: number, j: number): boolean {
        this.incComp(i,j);
        return this.getVal(i) > this.getVal(j);
    }

    public getComparisons() {
        return this.comparisons;
    }

    public getArrayAccesses() {
        return this.arrayAccesses;
    }

    public getValues() {
        return this.values;
    }

    public getDetails() {
        return this.details;
    }
}

const SortableArrayFactory = (() => {
    const createDefaultArray = (values: Array<any>): SortableArray => {
        return new SortableArray(values, new EmptyDetails())
    }

    return {createDefaultArray};
})();

export {SortableArray, SortableArrayFactory};