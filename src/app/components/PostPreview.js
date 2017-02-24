import React from "react";
import {Link} from "react-router";

class PostPreview extends React.Component {
    render() {
        const { post, i } = this.props;
        const postSlug = "/posts/" + post.slug;
        return (
            <article>
                <h4>Post preview title</h4>
                <Link to={postSlug}>
                    {post.title}
                </Link>
                <p>{post.content.substring(0,100)}...</p>
                <hr />
            </article>
        )
    }
}

export default PostPreview;