import {
    GET_ALL_ORDERS,
    UPDATE_ORDERS_STATE
} from '../constants/action-types';
import store from '../store/index';

export function getAllordersMiddleware({ dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === GET_ALL_ORDERS) {
                getAllOrders();
            }
        
            return next(action);
        }
    };
}

export function getAllOrders() {
    const url = "https://pacific-harbor-80743.herokuapp.com/api/v2/users/152/parcels/"
    return fetch(url, {
            headers: {
                "token": localStorage.getItem("token")
            }
        })
        .then(response => response.json())
        .then(json => {
           store.dispatch({
                type: UPDATE_ORDERS_STATE,
                payload: json
            });
        });
};

export function logInUser() {
    const payload = {
        username: "elmonstro",
        password: "pa5ss#wGord"

    }
    const url = "https://pacific-harbor-80743.herokuapp.com/api/v2/auth/login"
    fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(json => {
            localStorage.setItem("token", json.token)
            console.log(json.message)
            getAllOrders()
        });
};