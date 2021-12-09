import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import {combineReducers} from 'redux';
import articleReducer from '../reducers/articleReducer';
import searchReducer from '../reducers/searchReducer';
import {reducer as formReducer} from 'redux-form'

const store = createStore(combineReducers({
    articlesState : articleReducer,
    searchState : searchReducer,
    form: formReducer
}));

export default store;