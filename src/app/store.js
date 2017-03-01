import {createStore, applyMiddleware} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

/**
 * The Store
 * @example
 *  - The store will pass two arguments to the reducer: the current state tree and the action.
 */

// import root reducer
import rootReducer from "./reducers/index";

// create an object for default data
const defaultState = {
    // githubActivity: [],
    // checkins: [],
    posts: [],
    // travels: []
}

const middleware = applyMiddleware(
    promise(), thunk, logger()
);

const store = createStore(
    rootReducer,
    defaultState,
    middleware,
    /* Redux dev tools */
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const history = syncHistoryWithStore(
    browserHistory,
    store
)

export default store;