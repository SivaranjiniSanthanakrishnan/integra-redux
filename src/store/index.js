import rootReducer from "../reducers/index";
import { combineReducers, applyMiddleware, createStore } from "redux";
import articleReducer from "../reducers/articleReducer";
import searchReducer from "../reducers/searchReducer";
import { reducer as formReducer } from "redux-form";
import { thunk } from "redux-thunk";

const store = createStore(
  combineReducers({
    articlesState: articleReducer,
    searchState: searchReducer,
    form: formReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
