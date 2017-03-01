import React from "react";
import Post from "./Post/Post";

class CategoryView extends React.Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    _findPostsByCategory(posts) {
        const categorySlug = this.props.params.category;

        return posts.posts.filter(
            post => post.categories.find(
                category => category.slug == categorySlug
            )
        );
    }

    render() {
        const {posts} = this.props;

        if (typeof posts.posts == 'undefined')
            return false;

        const postsByCategory = this._findPostsByCategory(posts)

        return (
            <section>
                <h1>Category: {this.props.params.category}</h1>

                {postsByCategory.map((post, i) =>
                    <Post
                        key={i}
                        i={i}
                        post={post}
                        {...this.props}
                    />
                )}
            </section>
        )
    }
}

export default CategoryView;