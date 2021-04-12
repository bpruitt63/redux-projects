const INITIAL_STATE = {};

export default function cart(state=INITIAL_STATE, action) {
    switch (action.type) {

        case "CHANGE":
            return {...state,
                    [action.product]: action.value}

        default:
            return state;
    };
};