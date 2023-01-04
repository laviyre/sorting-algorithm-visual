import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

function App() {
    return (
        <div className="App">
            <Header name = {"Sorting Algorithms Visualiser"}/>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default App;