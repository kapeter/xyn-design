import React from 'react'
import { Route, Switch } from "react-router-dom";

import ActivityList from './activity-list'
import ActivityOne from './activity-one'
import ActivityTwo from './activity-two'
import ActivityThree from './activity-three'
import ActivityFour from './activity-four'

class Activity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <audio src={require("../../assets/audio/activity.mp3")} loop autoPlay></audio>
                <Switch>
                    <Route path="/activity" exact  component={ActivityList} />
                    <Route path="/activity/1"  component={ActivityOne} />
                    <Route path="/activity/2"  component={ActivityTwo} />
                    <Route path="/activity/3"  component={ActivityThree} />
                    <Route path="/activity/4"  component={ActivityFour} />
                </Switch>            
            </div>
        )
    }
}

export default Activity