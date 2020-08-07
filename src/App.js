import React from 'react';
import './App.css';
import Content from "./Components/Content/Content";
import Login from "./Components/Login/Login";
import {Redirect, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <Switch>
            {/*<Route exact path='/' render={() => <Redirect to='/login'/>}/>*/}
            {/*<Route path='/login' render={() => <Login/>}/>*/}
            <Route path='/contacts' render={() => <Content/>}/>
            <Route exact path='/' render={() => <Redirect to='/contacts'/>}/>
        </Switch>
    );
}

export default App;
