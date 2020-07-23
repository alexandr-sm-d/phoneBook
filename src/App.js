import React from 'react';
import './App.css';
import Content from "./Components/Content/Content";
import Login from "./Components/Login/Login";
import {Redirect, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <main>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to='/login'/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/contacts' render={() => <Content/>}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
