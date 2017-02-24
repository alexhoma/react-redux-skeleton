// create post
export function createPost(id, slug, title, content, author) {
    return {
        type: "CREATE_POST",
        id,
        slug,
        title,
        content,
        author
    }
}

// update post
export function updatePost(id, title, content, author) {
    return {
        type: "UPDATE_POST",
        id,
        title,
        content,
        author
    }
}

// remove post
export function removePost(id) {
    return {
        type: "REMOVE_POST",
        id
    }
}