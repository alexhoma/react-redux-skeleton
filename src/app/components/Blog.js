import React from "react";
import PostPreview from "./PostPreview";

class Blog extends React.Component {
    render() {
        return (
            <section>
                {this.props.posts.map( (post, i) =>
                    <PostPreview
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