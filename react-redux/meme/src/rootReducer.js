const INITIAL_STATE = {memes: [], 
                        id: 1,
                        };

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        
        case "SUBMIT":
            return {...state, 
                        memes: [...state.memes, {
                            topText: action.payload.topText,
                            bottomText: action.payload.bottomText,
                            imgUrl: action.payload.imgUrl,
                            id: state.id
                                    }],
                        id: state.id + 1
                                };

        case "REMOVE":
            let memes = [...state.memes];
            memes = memes.filter(meme => meme.id !== parseInt(action.payload));
            return {...state,
                        memes: memes
                    };

        default:
            return state;
    }
}

export default rootReducer;