import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as postActionCreators from "../actions/postActions";

import Main from "./Main";

function mapStateToProps(state) {
    return {
        posts: state.posts
        // another state props ..
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        postActionCreators,
        dispatch
    );
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default App;