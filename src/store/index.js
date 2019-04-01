import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import rootReducer from '../reducers/index';
import { getAllordersMiddleware } from '../middleware/index';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(thunk, getAllordersMiddleware)),
    );

export default store