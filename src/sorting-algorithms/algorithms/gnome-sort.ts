import  { SortingAlgorithmAsync } from "./sorting-algorithm";
import { SortableArray } from "../sortable-array";

class GnomeSort implements SortingAlgorithmAsync {
    async sort(arr: SortableArray): Promise<Array<any>> {
        if (arr.getValues().length === 0) return [];
        let pos = 0;

        while (pos < arr.getValues().length) {
            if (pos === 0 || await arr.compare(pos-1, pos))
                pos++;
            else 
                await arr.swap(pos, --pos);
        }

        return arr.getValues();
    }

    getName() { return "Gnome Sort"; }
}

export default GnomeSort;