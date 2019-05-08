import React from 'react'
import { Route, Switch } from "react-router-dom";

import StoryList from './story-list'
import StoryOne from './story-one'
import StoryTwo from './story-two'
import StoryThree from './story-three'
import StoryFour from './story-four'

class Story extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <audio src={require("../../assets/audio/story.mp3")} loop autoPlay></audio>
                <Switch>
                    <Route path="/story" exact component={StoryList} />
                    <Route path="/story/1"  component={StoryOne} />
                    <Route path="/story/2"  component={StoryTwo} />
                    <Route path="/story/3"  component={StoryThree} />
                    <Route path="/story/4"  component={StoryFour} />
                </Switch>            
            </div>
        )
    }
}

export default Story