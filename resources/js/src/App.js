import IMAGES from "./assets";
import React from "react";
import "./App.css";

const Header = () => {
    return (
        <div className="App-body">
            <header className="App-header">
                <img src={IMAGES.LOGO} className="App-logo" alt="logo" />
                <div className="App-navigation-links">Links</div>
                <div className="App-link">Explore</div>
            </header>
        </div>
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
