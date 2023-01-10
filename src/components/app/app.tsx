import { useState } from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

import { SortableArray, SortableArrayFactory } from "../../sorting-algorithms/sortable-array";
//import SortingHandler from "../../sorting-algorithms/sorting-handler";
import { allAlgorithms } from "../../sorting-algorithms/algorithms";
import ShuffleManager from "../../sorting-algorithms/util/shuffle";

function App() {

    /**
     * Shuffle Mode => shuffleModes. strings pass back.
     * Algorithm => allAlgorithms. strings pass back.
     * Size (number)
     * Speed (number)
     * Displayable Array
     */

    let currArray: SortableArray;

    const [size, setSize] = useState(1);
    const [speed, setSpeed] = useState(1);
    const [algorithm, setAlgorithm] = useState("Bubble Sort");
    const [mode, setMode] = useState("Normal");
    const [arr, setArr] = useState(SortableArrayFactory.createSortedArray(1).getDisplayableArray());

    function updateSize(n: number) {
        setSize(n);
        updateArray(SortableArrayFactory.createSortedArray(n));
    }

    function updateArray(arr: SortableArray) {
        currArray = arr;
        setArr(currArray.getDisplayableArray());
    }

    function shuffle() {
        updateSize(size);
        let newVals = ShuffleManager.shuffle(currArray.getValues(), mode);
        updateArray(SortableArrayFactory.createDefaultArray(newVals));
    }

    return (
        <div className="App">
            <Header name = {"Sorting Algorithms Visualiser"}/>
            <Sidebar    start = {{active: true, fun: () => console.log("start")}} 
                        shuffle = {{active: true, fun: shuffle}}
                        shuffleMode = {{val: mode, onChange: setMode}}
                        algorithm = {{val: algorithm, onChange: setAlgorithm}}
                        size = {{val: size, onChange: updateSize}}
                        speed = {{val: speed, onChange: setSpeed}}
                        algorithms = {allAlgorithms.getAlgorithmNames()}
                        shuffleModes = {["Normal", "Weak"]}/>
            <Content arr = {arr}/>
        </div>
    )
}

export default App;