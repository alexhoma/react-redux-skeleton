import React from "react";
import PostView from "./Post";

class Blog extends React.Component {
    render() {
        return (
            <section>
                {this.props.posts.map( (post, i) =>
                    <PostView
                        {...this.props}
                        key={i}
                        i={i}
                        post={post}
                    />
                )}
            </section>
        )
    }
}

export default Blog;