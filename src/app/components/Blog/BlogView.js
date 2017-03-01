import React from "react";
import Post from "./Post/Post";

class BlogView extends React.Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const {posts} = this.props;

        if (posts.fetching) {
            return (
                <section>
                    Loading ...
                </section>
            )
        }

        if (typeof posts.posts == 'undefined')
            return false;

        return (
            <section>
                {posts.posts.map((post, i) =>
                    <Post
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

export default BlogView;