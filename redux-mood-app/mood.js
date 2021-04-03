const happy = 'മ◡മ';
const sick = '(＾～＾)';
const surprised = '⊙▂⊙';
const suspicious = '→_→';

const INITIAL_STATE = {mood: '⊙︿⊙'};

function moodReducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case "HAPPY":
            return {...state, mood: happy};
        
        case "SICK":
            return {...state, mood: sick};

        case "SURPRISED":
            return {...state, mood: surprised};

        case "SUSPICIOUS":
            return {...state, mood: suspicious};

        default:
            return state;
    };
};

const store = Redux.createStore(moodReducer);

const face = document.querySelector('#mood');

document.querySelector('#happy').addEventListener('click', function(){
    store.dispatch({type: "HAPPY"});
    const mood = store.getState().mood;
    face.innerText = mood;
});

document.querySelector('#sick').addEventListener('click', function(){
    store.dispatch({type: "SICK"});
    const mood = store.getState().mood;
    face.innerText = mood;
});

document.querySelector('#surprised').addEventListener('click', function(){
    store.dispatch({type: "SURPRISED"});
    const mood = store.getState().mood;
    face.innerText = mood;
});

document.querySelector('#suspicious').addEventListener('click', function(){
    store.dispatch({type: "SUSPICIOUS"});
    const mood = store.getState().mood;
    face.innerText = mood;
});