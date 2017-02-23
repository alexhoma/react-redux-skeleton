import React, { Component } from 'react';
import {
    Router,
    Route,
    browserHistory,
    IndexRoute
} from 'react-router';

import { Root } from '../components/Root';
import { Home } from '../components/Home';
import { Blog } from '../components/Blog';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"home"} component={Home}/>
                    <Route path={"blog(/:entryId)"} component={Blog}/>
                    {/* more routes here.. */}
                </Route>
                {/* and here.. */}
            </Router>
        );
    }
}

export default App;
