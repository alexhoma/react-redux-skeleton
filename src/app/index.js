import React from "react";
import ReactDOM from "react-dom";

// Import css
import "./styles/index.sass";

// Import components
import App from "./containers/App";
import Home from "./components/Home/Home";
import BlogView from "./components/Blog/BlogView";
import PostView from "./components/Blog/PostView";
import CategoryView from "./components/Blog/CategoryView";

// Router dependencies
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";
import store, {history} from "./store";

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
            </Route>
            <Route path="/blog" component={App}>
                <IndexRoute component={BlogView} />
                <Route path="/blog/:slug" component={PostView} />
                <Route path="/blog/categories/:category" component={CategoryView} />
            </Route>
        </Router>
    </Provider>
);

// Render this!
ReactDOM.render(
    router,
    document.getElementById("root")
);