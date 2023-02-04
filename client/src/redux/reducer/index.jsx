//import actions
import { GET_PRODUCTS } from "../actions/index";
//estado global redux
const initialState = {
  products: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    //Default
    default:
      return state;
  }
}
