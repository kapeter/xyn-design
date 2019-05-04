import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css"
import "swiper/dist/css/swiper.min.css"

//pages
import Index from './pages/index'

import Activity from './pages/activity'
import ActivityOne from './pages/activity/activity-one'
import ActivityTwo from './pages/activity/activity-two'
import ActivityThree from './pages/activity/activity-three'
import ActivityFour from './pages/activity/activity-four'

import Story from './pages/story'
import StoryOne from './pages/story/story-one'
import StoryTwo from './pages/story/story-two'
import StoryThree from './pages/story/story-three'
import StoryFour from './pages/story/story-four'

import Character from './pages/character'
import Contact from './pages/contact'
import Download from './pages/download'
import NoMatch from './pages/no-match'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/activity" exact component={Activity} />
            <Route path="/activity/1" exact component={ActivityOne} />
            <Route path="/activity/2" exact component={ActivityTwo} />
            <Route path="/activity/3" exact component={ActivityThree} />
            <Route path="/activity/4" exact component={ActivityFour} />

            <Route path="/story" exact component={Story} />
            <Route path="/story/1" exact component={StoryOne} />
            <Route path="/story/2" exact component={StoryTwo} />
            <Route path="/story/3" exact component={StoryThree} />
            <Route path="/story/4" exact component={StoryFour} />

            <Route path="/character" exact component={Character} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/download" exact component={Download} />
            <Route component={NoMatch} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
