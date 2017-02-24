/** Root reducer */
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