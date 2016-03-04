import * as Redux from 'redux';
import { INCREMENT, DECREMENT } from './actions';

export const counter_reducer = ( state = 0, action ) => {
    switch( action.type ) {
    case INCREMENT.type:
        return state + 1;
    case DECREMENT.type:
        return state - 1;
    default:
        return state;
    }
}

export const store = Redux.createStore( counter_reducer );

export function createStore( reducer ) {
	let state;
	let listeners = [];

	const getState = _ => state;

	const dispatch = (action) => {
		state = reducer( state, action );
		listeners.forEach( listener => listener() );
	};

	const subscribe = (listener) => {
		listeners.push( listener );
		return _ => {
			listeners = listeners.filter( l => l !== listener );
		};
	};

	dispatch({});

	return { getState, dispatch, subscribe };
}