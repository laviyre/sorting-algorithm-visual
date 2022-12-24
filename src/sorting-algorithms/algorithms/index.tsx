import BubbleSort from "./bubble-sort";
import InsertionSort from "./insertion-sort";
import SelectionSort from "./selection-sort";
import MergeSort from "./merge-sort";
import SortingAlgorithm from "./sorting-algorithm";

const sortingAlgorithms: Array<SortingAlgorithm> = [
    new BubbleSort(),
    new SelectionSort(),
    new InsertionSort(),
    new MergeSort(),
];

export default sortingAlgorithms;