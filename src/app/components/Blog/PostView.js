import React from "react";
import Post from "./Post";

class PostView extends React.Component {
    render() {
        // getting index of the post that is equal to url slug
        const index = this.props.posts.findIndex(
            (post) => post.slug === this.props.params.slug)

        // getting the post props
        const post = this.props.posts[index];

        return (
            <div>
                <Post i={index} post={post} {...this.props} />
            </div>
        )
    }
}

export default PostView;