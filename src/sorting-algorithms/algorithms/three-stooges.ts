import { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class ThreeStooges implements SortingAlgorithmAsync {
    async sort(arr: SortableArray, start: number = 0, end = arr.getValues().length-1): Promise<Array<any>> {
        if (await arr.compare(end, start))
            await arr.swap(end, start);

        if (end - start > 1) {
            const prop = Math.floor((end - start + 1)/3);
            await this.sort(arr, start, end - prop);
            await this.sort(arr, start + prop, end);
            await this.sort(arr, start, end - prop);
        }

        return arr.getValues();
    }

    getName(): string { return "Three Stooges Sort"; }
}

export default ThreeStooges;