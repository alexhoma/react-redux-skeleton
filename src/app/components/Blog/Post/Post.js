import React, {PropTypes} from "react";
import {Link} from "react-router";
import Categories from "./Categories";

function createMarkup(content) {
    return {__html: content};
}

const Post = (props) => {
    const { post, i } = props;
    const postSlug = "/blog/" + post.slug;

    return (
        <article>
            <h2><Link to={postSlug}> {post.title} </Link></h2>

            <div dangerouslySetInnerHTML={createMarkup(post.content)} />

            <Categories categories={post.categories} />

            <hr />
        </article>
    )
}

export default Post;