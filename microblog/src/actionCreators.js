import MicroblogApi from './api';


export function getTitles() {
    return async function(dispatch) {
        const res = await MicroblogApi.getPosts();
        dispatch({type: "API_DATA", titles: res});
    };
};

export function getPost(id) {
    return async function(dispatch) {
        const res = await MicroblogApi.getPost(id);
        const comments = await MicroblogApi.getComments(id);
        dispatch({type: "POST_FROM_API", post: res, comments})
    };
};

export function newPost(post) {
    return async function(dispatch) {
        const res = await MicroblogApi.newPost(post);
        dispatch({type: "POST_FROM_API", post: res})
    };
};

export function editPost(id, post) {
    return async function(dispatch) {
        const res = await MicroblogApi.editPost(id, post);
        dispatch({type: "POST_FROM_API", post: res})
    };
};

export function newComment(postId, comment) {
    return async function(dispatch) {
        const res = await MicroblogApi.newComment(postId, comment);
        dispatch({type: "NEW_COMMENT", comment: res})
    };
};

