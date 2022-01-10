import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.payload]
      })

    case REMOVE_FROM_CART:
      /*
      const _obj = state.map(ele => ele);
      _obj.cartItems = cartItems.filter(ele => ele.itemId !== action.payload.itemId)
      return _obj;
       */
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(ele => ele.itemId !== action.payload.itemId)
      })
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      return Object.assign({}, state, {
        cartItems: state.cartItems.map((ele, index) => {
          if(index === idx) {
            ele.quantity = action.payload.quantity;
          }
          return ele;
        })
      })
      
    default:
      return state;
  }
}

export default itemReducer;