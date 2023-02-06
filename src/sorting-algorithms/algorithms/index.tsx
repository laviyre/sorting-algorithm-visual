import  { SortingAlgorithmAsync } from "./sorting-algorithm";

import BubbleSort from "./bubble-sort";
import InsertionSort from "./insertion-sort";
import SelectionSort from "./selection-sort";
import MergeSort from "./merge-sort";
import GnomeSort from "./gnome-sort";
import BogoSort from "./bogo-sort";
import ThreeStooges from "./three-stooges";
import BozoSort from "./bozo-sort";
import ShellSort from "./shell-sort";
import { QuickSortFactory } from "./quick-sort";
import HeapSort from "./heap-sort";
import CocktailShakerSort from "./cocktail-shaker-sort";

const asyncSortingAlgorithms: Array<SortingAlgorithmAsync> = [
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
]

class SortingAlgorithms {
    private algorithms: Record<string, SortingAlgorithmAsync>;

    constructor(sortingAlgorithms: Array<SortingAlgorithmAsync>) {
        this.algorithms = {};
        sortingAlgorithms.forEach(alg => {this.algorithms[alg.getName()] = alg});
    }

    public getAlgorithm(name: string): SortingAlgorithmAsync {
        return this.algorithms[name];
    }

    public getAlgorithmNames(): Array<string> {
        return Object.keys(this.algorithms);
    }
}

const allAlgorithms = new SortingAlgorithms(asyncSortingAlgorithms);

export default asyncSortingAlgorithms;
export {allAlgorithms}