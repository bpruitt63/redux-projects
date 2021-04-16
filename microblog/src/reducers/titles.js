const INITIAL_STATE = [];

export default function titles(state=INITIAL_STATE, action) {
    switch (action.type) {

        case "API_DATA":
            return action.titles;
            

        default:
            return state;
    };
};