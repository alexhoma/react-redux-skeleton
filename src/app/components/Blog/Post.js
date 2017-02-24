import React from "react";
import {Link} from "react-router";

class Post extends React.Component {
    render() {
        const { post, i } = this.props;
        const postSlug = "/posts/" + post.slug;
        return (
            <article>
                <Link to={postSlug}>
                    {post.title}
                </Link>
                <p>{post.content}</p>
                <b>Author: {post.author}</b>
                <hr />
            </article>
        )
    }
}

export default Post;