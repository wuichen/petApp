"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
// import combined reducers
import reducers from './reducers/index';

// import cart actions
import {addToCart} from './actions/cartActions';

import {postBooks, deleteBooks, updateBooks} from './actions/bookActions';

const middleware = applyMiddleware(logger);

// create the store
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render(
	<Provider store={store}>
		<BooksList />
	</Provider>
	, document.getElementById('app')
);


store.dispatch(postBooks([
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
	}
]))

store.dispatch(deleteBooks(
	{
		id: 1
	}
))

store.dispatch(updateBooks({
	id: 2,
	title: 'asdfccc'
}))



// CART ACTIONS
store.dispatch(addToCart([{id: 1}]))
