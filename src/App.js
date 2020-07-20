import React from 'react';
import './App.css';
import Content from "./Components/Content/Content";
import Login from "./Components/Login/Login";

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <main>
                <Login/>
                <Content/>
            </main>
        </div>
    );
}

export default App;
