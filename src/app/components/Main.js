import React from "react";
import {Link} from "react-router";

class Main extends React.Component {
    render() {
        return (
            <main>
                <h1>React redux bootstrap</h1>
                <Link to="/">Home</Link>

                <hr/>
                {React.cloneElement(this.props.children, this.props)}
                {/*{this.props.children}*/}
            </main>
        )
    }
}

export default Main;