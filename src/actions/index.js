import { UPDATE_ORDERS_STATE, GET_ALL_ORDERS } from '../constants/action-types';

const url = "https://pacific-harbor-80743.herokuapp.com/api/v2/parcels/"

export function createOrder(payload) {
    let token = localStorage.getItem("token")
    return function(dispatch) {
      return fetch(url , {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
              "Content-Type": "application/json",
              "token": token
          }
      })
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_ALL_ORDERS, payload: json })
            console.log(json.message);
        });
    };
}
  