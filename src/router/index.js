import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import MobileIndex from '../Mobile/MobileIndex';

const RouteConfig = () => {
    <Router>
        <Switch>
            <Route path="/" exact component={MobileIndex} />
        </Switch>
    </Router>
}

export default RouteConfig;