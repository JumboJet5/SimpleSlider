import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./reducers/rootReducer";
import {autoSlider} from "./autoSlider";
import thunk from 'redux-thunk';

export default function configureStore(){
    return createStore( rootReducer, applyMiddleware(thunk, autoSlider));
}