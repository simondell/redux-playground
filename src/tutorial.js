import { createStore } from 'redux';

const counter = ( state = 0, action ) => {
    switch( action.type ) {
    case "INCREMENT":
        return state + 1;
    case "DECREMENT":
        return state - 2;
    default:
        return state;
    }
}

export const store = createStore( counter );