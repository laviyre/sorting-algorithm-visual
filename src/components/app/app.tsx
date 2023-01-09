import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

import { SortableArrayFactory } from "../../sorting-algorithms/sortable-array";
//import SortingHandler from "../../sorting-algorithms/sorting-handler";

function App() {
    let randomData = [];

    for (let i = 0; i < 1000; i++) {
        randomData.push(1+i);
    }

    const testArray = SortableArrayFactory.createDefaultArray(randomData);

    const testDisplayArray = testArray.getDisplayableArray();

    return (
        <div className="App">
            <Header name = {"Sorting Algorithms Visualiser"}/>
            <Sidebar/>
            <Content arr = {testDisplayArray}/>
        </div>
    )
}

export default App;