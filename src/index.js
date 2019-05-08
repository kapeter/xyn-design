import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css"
import "swiper/dist/css/swiper.min.css"

//pages
import Index from './pages/index'
import Activity from './pages/activity'
import Story from './pages/story'
import Character from './pages/character'
import Contact from './pages/contact'
import Download from './pages/download'
import NoMatch from './pages/no-match'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/activity" component={Activity} />
            <Route path="/story" component={Story} />
            <Route path="/character" exact component={Character} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/download" exact component={Download} />
            <Route component={NoMatch} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
