/**
 * Reducers
 * @example
 *  - Note that a reducer is a pure function:
 *      - It only computes the next state.
 *      - It should be completely predictable: calling it with the same inputs many times should produce the same outputs.
 *      - It shouldn't perform any side effects like API calls or router transitions.
 *  - These should happen before an action is dispatched.
 */

const initialState = {
    posts: [],
    fetching: false,
    fetched: false,
    error: null
}

/** Posts reducer */
const posts = (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_POSTS_PENDING': {
            return {
                ...state,
                fetching: true
            }
            break;
        }
        case 'FETCH_POSTS_ERROR': {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        }
        case 'FETCH_POSTS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                posts: action.payload.data
            }
            break;
        }
    }
    return state;
}

export default posts;