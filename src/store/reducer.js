 import * as actionTypes from './actions';

 const intialState = {
        ingredients: {
        	salad: 0,
        	bacon: 0,
        	cheese: 0,
        	meat: 0
        },
        totalPrice: 4,
 };

 const reducer = (state = intialState, action) => {
 	switch(action.type){
 		case actionTypes.ADD_INGREDIENT: 
 			return {

 			};
 		case actionTypes.REMOVE_INGREDIENT: 
 			return {

 			};
 		default:
 			return state;
 	}
 };

 export default reducer;