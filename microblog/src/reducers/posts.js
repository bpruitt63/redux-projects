const INITIAL_STATE = {};

export default function posts(state=INITIAL_STATE, action) {
    switch (action.type) {

        case "POST_FROM_API":
            return {id: action.post.id,
                        title: action.post.title,
                        description: action.post.description,
                        body: action.post.body,
                        votes: action.post.votes,
                        comments: action.comments
                    };

        case "NEW_COMMENT":
            return {...state,
                    comments: [...state.comments, action.comment]
            };

        default:
            return state;
    };
};