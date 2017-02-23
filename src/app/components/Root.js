import React, {Component} from "react";
import {Header} from "../components/Header";

export class Root extends Component {

    render() {
        return (
            <main>
                <Header />
                {this.props.children}
            </main>
        )
    }
}