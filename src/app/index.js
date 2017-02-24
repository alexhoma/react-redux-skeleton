import React from "react";
import ReactDOM from "react-dom";

// Import css
// ... some sass imorts

// Import components
import App from "./components/App";
import Blog from "./components/Blog/Blog";
import PostView from "./components/Blog/PostView";

// Router dependencies
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";
import store, {history} from "./store";

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Blog} />
                <Route path="/posts/:slug" component={PostView} />
            </Route>
        </Router>
    </Provider>
);

// Render!
ReactDOM.render(
    router,
    document.getElementById("root")
);