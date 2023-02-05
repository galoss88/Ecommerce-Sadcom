//import actions
import { GET_PRODUCTS, SHOW_DETAIL } from "../actions/index";
//estado global redux
const initialState = {
  products: [],
  showDetail: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SHOW_DETAIL:{
      return {
        showDetail: action.payload,
      };
    }
    //Default
    default:
      return state;
  }
}
