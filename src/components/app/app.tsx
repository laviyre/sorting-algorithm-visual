import { useState } from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

import { SortableArray, SortableArrayFactory } from "../../sorting-algorithms/sortable-array";
import { allAlgorithms } from "../../sorting-algorithms/algorithms";
import ShuffleManager from "../../sorting-algorithms/util/shuffle";
import DisplayableArray from "../../sorting-algorithms/displayable-array";



function App() {
    const [size, setSize] = useState(1);
    const [speed, setSpeed] = useState(1);
    const [algorithm, setAlgorithm] = useState("Bubble Sort");
    const [mode, setMode] = useState("Normal");
    const [arr, setArr] = useState(new DisplayableArray(Array(1), Array(0)));
    const [sortArr, setSortArr] = useState(SortableArrayFactory.createSortedAsyncArray(1, speed))
    const [sorting, setSorting] = useState(false);

    function updateSize(n: number): void {
        setSize(n);
        updateArray(SortableArrayFactory.createSortedAsyncArray(n, speed));
    }

    function updateArray(newArr: SortableArray): void {
        setSortArr(newArr);     
        setArr(newArr.getDisplayableArray());
        newArr.getDetails().setUpdateParent(() => setArr(newArr.getDisplayableArray()));
    }

    function updateSpeed(n: number): void {
        setSpeed(n);
        sortArr.getDetails().setSpeed(n);
    }

    function shuffle(): void {
        let newVals = ShuffleManager.shuffle(sortArr.getValues(), mode);
        updateArray(SortableArrayFactory.createAsyncArray(speed, newVals));
    }

    async function start(): Promise<void> {
        setSorting(!sorting);
        let currAlgorithm = allAlgorithms.getAlgorithm(algorithm);
        console.log(await currAlgorithm.sort(sortArr));
        setArr(sortArr.getResetDisplayableArray());
        await sortArr.checkSorted();
        setArr(sortArr.getResetDisplayableArray());
        setSorting(false);
    }

    return (
        <div className="App">
            <Header name = {"Sorting Algorithms Visualiser"}/>
            <Sidebar    start = {{active: true, fun: start}} 
                        shuffle = {{active: !sorting, fun: shuffle}}
                        shuffleMode = {{val: mode, onChange: setMode}}
                        algorithm = {{val: algorithm, onChange: setAlgorithm}}
                        size = {{val: size, onChange: updateSize}}
                        speed = {{val: speed, onChange: updateSpeed}}
                        algorithms = {allAlgorithms.getAlgorithmNames()}
                        shuffleModes = {["Normal", "Weak"]}/>
            <Content arr = {arr}/>
        </div>
    )
}

export default App;