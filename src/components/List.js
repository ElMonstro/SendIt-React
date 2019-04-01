import * as React from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { orders: state.orders };
};

const ConnectedList = ({ orders }) => (
    <ul className="list-group list-group-flush">
        {orders.map(
            el => (
                <li className="list-group-item" key={el.order_id}>
                    <span>Sender ID: {el.user_id} | </span><span>Order ID: {el.order_id}</span>
                </li>
            )
        )}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
 