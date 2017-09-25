"use strict"

export function cartReducers(state={cart:[]}, action) {
	switch(action.type) {
		case "ADD_TO_CART":
		return {
			cart: [...state, ...action.payload]
			// i prefer cart: [...action.payload]
		}
		case "DELETE_CART_ITEM":
		return {
			cart: [...state, ...action.payload]
			// i prefer cart: [...action.payload]
		}
		break;
	}

	return state;
}