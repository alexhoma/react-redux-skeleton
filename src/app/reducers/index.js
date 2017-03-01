/**
 * Root reducer
 * @example
 *  - The root reducer may combine the output of multiple reducers into a single state tree.
 */
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

// import reducers
import posts from "./posts";
// other reducers ..

const rootReducer = combineReducers({
    posts,
    // other reducers ..
    routing: routerReducer
})

export default rootReducer;