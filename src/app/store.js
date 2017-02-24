import {createStore} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";

// import root reducer
import rootReducer from "./reducers/index";

// import data
import posts from "./data/posts";

// create an object for default data
const defaultState = {
    posts: posts
}

const store = createStore(
    rootReducer,
    defaultState
)

export const history = syncHistoryWithStore(
    browserHistory,
    store
)

export default store;