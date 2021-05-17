import React from 'react';
import './App.less';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import Product from './pages/Product'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/store" component={Store}/>
                <Route exact path="/product" component={Product}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;