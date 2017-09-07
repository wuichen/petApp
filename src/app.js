"use strict"

import {createStore} from 'redux';


// define reducers
const reducer = function(state = {books:[]}, action) {
	switch(action.type) {
		case "POST_BOOK":
			return {
				books: [...state.books, ...action.payload]
			};
			break;
	}

	return state;
}

// create the store
const store = createStore(reducer);

store.subscribe(function() {
	console.log('current state is: ',  store.getState());
})

// create and dispatch
store.dispatch({
	type: "POST_BOOK",
	payload: [
		{
			id: 1,
			title: 'book title',
			description: 'desc',
			price: 4
		},
		{
			id: 2,
			title: 'book title 2',
			description: 'desc2',
			price: 5
		},
	]
})
store.dispatch({
	type: "POST_BOOK",
	payload: [
		{
			id: 3,
			title: 'book title3',
			description: 'desc3',
			price: 41
		}
	]
})
