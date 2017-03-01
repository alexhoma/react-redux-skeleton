import React from "react";
import Post from "./Post/Post";

class PostView extends React.Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    _findSinglePost(posts) {
        const {slug} =  this.props.params;

        return posts.posts.find(post => post.slug == slug);
    }

    render() {
        const {posts} = this.props;

        if (typeof posts.posts == 'undefined')
            return false;

        const post = this._findSinglePost(posts)

        return (
            <section>
                <Post post={post} {...this.props} />
            </section>
        )
    }
}

export default PostView;