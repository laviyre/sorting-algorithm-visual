import BubbleSort from "./bubble-sort";
import InsertionSort from "./insertion-sort";
import SelectionSort from "./selection-sort";
import MergeSort from "./merge-sort";
import GnomeSort from "./gnome-sort";
import BogoSort from "./bogo-sort";
import ThreeStooges from "./three-stooges";
import BozoSort from "./bozo-sort";
import ShellSort from "./shell-sort";
import SortingAlgorithm from "./sorting-algorithm";
import { QuickSortFactory } from "./quick-sort";
import HeapSort from "./heap-sort";
import CocktailShakerSort from "./cocktail-shaker-sort";


const sortingAlgorithms: Array<SortingAlgorithm> = [
    new BubbleSort(),
    new SelectionSort(),
    new InsertionSort(),
    new MergeSort(),
    new GnomeSort(),
    new BogoSort(),
    new ThreeStooges(),
    new BozoSort(),
    new ShellSort(),
    new CocktailShakerSort(),
    ...QuickSortFactory.getLomutoQuickSorts(),
    ...QuickSortFactory.getHoareQuickSorts(),
    new HeapSort(false),
    new HeapSort(true),
];

class SortingAlgorithms {
    private algorithms: Record<string, SortingAlgorithm>;

    constructor(sortingAlgorithms: Array<SortingAlgorithm>) {
        this.algorithms = {};
        sortingAlgorithms.forEach(alg => {this.algorithms[alg.getName()] = alg});
    }

    public getAlgorithm(name: string): SortingAlgorithm {
        return this.algorithms[name];
    }

    public getAlgorithmNames(): Array<string> {
        return Object.keys(this.algorithms);
    }
}

const allAlgorithms = new SortingAlgorithms(sortingAlgorithms);

export default sortingAlgorithms;
export {allAlgorithms}