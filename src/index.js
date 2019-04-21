import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css"

//pages
import Index from './pages/index'
import Activity from './pages/activity'
import Story from './pages/story'
import Character from './pages/character'
import Contact from './pages/contact'
import NoMatch from './pages/no-match'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/activity" component={Activity} />
            <Route path="/story" component={Story} />
            <Route path="/character" component={Character} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
