import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "../reducer";
import thunk from "redux-thunk";
import { persistedReducer } from "../reducer/persistConfig";
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
