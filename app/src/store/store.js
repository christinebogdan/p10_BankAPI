import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../store/reducers";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
