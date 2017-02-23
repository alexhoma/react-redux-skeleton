import React, {Component} from "react";

export class Blog extends Component {
    render() {
        return (
            <section className="Blog">
                <h2>Blog page</h2>
                Entry: {this.props.params.entryId}
            </section>
        )
    }
}