import {combineReducers} from 'redux';
import titleReducer from './titles';
import postReducer from './posts';

const rootReducer = combineReducers({titles: titleReducer, 
                                        posts: postReducer});

export default rootReducer;