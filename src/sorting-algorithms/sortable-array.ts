import {DefaultDetails} from "./util/details-manager";
import DisplayableArray from "./displayable-array";

class SortableArray {
    private comparisons: number;
    private arrayAccesses: number;
    private values: Array<any>;
    private details: DefaultDetails;
    private incrementMode: boolean = true;

    constructor(values: Array<any>, details: DefaultDetails) {
        this.comparisons = 0;
        this.arrayAccesses = 0;
        this.values = [...values];
        this.details = details;
    }

    public async incComp(i: number, j: number): Promise<void> {
        if (this.incrementMode) this.comparisons++;
        await this.details.compare(i,j);
    }

    public async incAA(i: number): Promise<void> {
        if (this.incrementMode) this.arrayAccesses++;
        await this.details.access(i);
    }

    public async getVal(i: number): Promise<number> {
        await this.incAA(i);
        return this.values[i];
    }

    public async setVal(i: number, val: number): Promise<void> {
        await this.incAA(i);
        this.values[i] = val;
    }

    public async swap(i: number, j: number): Promise<void> {
        let temp = await this.getVal(i);
        await this.setVal(i, await this.getVal(j));
        await this.setVal(j, temp);
    }

    public async compare(i: number, j: number): Promise<boolean> {
        await this.incComp(i,j);
        let iValue = await this.getVal(i)
        let jValue = await this.getVal(j)
        return iValue < jValue;
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

    public getDisplayableArray(): DisplayableArray {
        return new DisplayableArray(this.getValues(), this.getDetails().getColors());
    }

    public getResetDisplayableArray(): DisplayableArray {
        this.getDetails().resetColours();
        return this.getDisplayableArray();
    }

    public async checkSorted(): Promise<boolean> {
        for (let i = 1; i < this.getValues().length; i++) {
            if (!(await this.compare(i-1, i)))
                return false;
        }

        return true;
    }

    public setIncrementMode(result: boolean) {
        this.incrementMode = result;
    }
}

const SortableArrayFactory = (() => {
    const createSortedAsyncArray = (size: number, speed: number): SortableArray => {
        return new SortableArray(new Array(size).fill(1).map((val, i) => i+1), new DefaultDetails(speed, size));
    }

    const createAsyncArray = (speed: number, vals: Array<any>): SortableArray => {
        return new SortableArray(vals, new DefaultDetails(speed, vals.length));
    }

    const createTimelessArray = (vals: Array<any>): SortableArray => {
        return createAsyncArray(Math.pow(10, 12), vals);
    }

    return {createTimelessArray, createAsyncArray, createSortedAsyncArray};
})();

export {SortableArray, SortableArrayFactory};