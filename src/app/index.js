import React from "react";
import ReactDOM from "react-dom";

// Import css
// ... some sass imorts

// Import components
import Main from "./components/Main";
import Blog from "./components/Blog";
import Post from "./components/Post";

// Router dependencies
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";
import store, {history} from "./store";

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute componetn={Blog} />
                <Route path="/blog/:postId" component={Post} />
            </Route>
        </Router>
    </Provider>
)

// Render!
ReactDOM.render(
    router,
    document.getElementById("root")
);