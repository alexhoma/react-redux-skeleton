// create post
export function createPost(id, title, content, author) {
    return {
        type: "CREATE_POST",
        id,
        title,
        content,
        author
    }
}

// update post
export function createPost(id, title, content, author) {
    return {
        type: "UPDATE_POST",
        id,
        title,
        content,
        author
    }
}

// remove post
export function createPost(id) {
    return {
        type: "REMOVE_POST",
        id
    }
}