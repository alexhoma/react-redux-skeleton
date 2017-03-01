import axios from "axios";


/**
 * Post Actions
 * @example
 *  - An action is a plain object describing what happened.
 *  - Think of an action as a very brief snippet of news.
 */

const API = 'http://demo4291164.mockable.io';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: axios.get(API + '/posts')
    }
}