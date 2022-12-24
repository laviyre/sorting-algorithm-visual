import BubbleSort from "./bubble-sort";
import SelectionSort from "./selection-sort";
import SortingAlgorithm from "./sorting-algorithm";

const sortingAlgorithms: Array<SortingAlgorithm> = [
    new BubbleSort(),
    new SelectionSort(),
];

export default sortingAlgorithms;