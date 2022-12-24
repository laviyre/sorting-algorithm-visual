import SortingAlgorithm from "./algorithms/sorting-algorithm";
import {SortableArray, SortableArrayFactory} from "./sortable-array";

class SortingHandler {
    sort(values: Array<any>, algorithm: SortingAlgorithm): Array<any> {
        let arr: SortableArray = SortableArrayFactory.createDefaultArray(values);
        return algorithm.sort(arr);
    }
}   

export default SortingHandler;