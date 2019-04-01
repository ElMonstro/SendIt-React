import * as React from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { orders: state.orders };
};

const ConnectedList = ({ orders }) => (
    <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Parcel orders</h2>
    <ul className="list-group list-group-flush">
        {orders.map(
            el => (
                <li className="list-group-item" key={el.order_id}>
                    <span>Sender ID: {el.user_id} | </span><span>Order ID: {el.order_id}</span>
                </li>
            )
        )}
            </ul>
        </div>
        </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
 