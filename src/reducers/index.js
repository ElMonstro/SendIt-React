import { CREATE_ORDER, UPDATE_ORDERS_STATE } from '../constants/action-types';

const initialState = {
    orders: []
};

function rootReducer(state = initialState, action){
    if (action.type === UPDATE_ORDERS_STATE) {
        return Object.assign({}, state, {
            orders: action.payload.orders
        })
    }
    return state;
};

export default rootReducer;
