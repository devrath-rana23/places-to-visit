import IMAGES from "./assets";
import React from "react";
import "./App.css";

const Header = () => {
    return (
        <>
            <header className="App-header">
                <img src={IMAGES.LOGO} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </>
    );
};

function App() {
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
