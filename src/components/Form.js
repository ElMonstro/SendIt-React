import * as React from "react"
import { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { createOrder } from '../actions/index';

function mapDispatchToProps (dispatch) {
    return {
        createOrder: order => dispatch(createOrder(order))
    };
}

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = { 
            "weight": "",
            "recepient_name": "",
            "recepient_no": "",
            "pickup": "",
            "dest": ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const order = this.state;
        order.weight = parseInt(order.weight)
        order.recepient_no  = parseInt(order.recepient_no)
        this.props.createOrder(order);
        // this.setState({title: ""})
    }

    render () {
        const { weight, recepient_name, recepient_no, pickup, dest } = this.state;
        return (
        <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
            <label htmlFor="recepient_name">Receipient Name</label>
            <input 
            type="text"
            className="form-control"
            id="recepient_name"
            value = {recepient_name}
            onChange ={this.handleChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="recepient_no">Receipient Number</label>
            <input 
            type="text"
            className="form-control"
            id="recepient_no"
            value = {recepient_no}
            onChange ={this.handleChange}/>
        </div>   
        <div className="form-group">
            <label htmlFor="pickup">Pickup</label>
            <input 
            type="text"
            className="form-control"
            id="pickup"
            value = {pickup}
            onChange ={this.handleChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="dest">Destination</label>
            <input 
            type="text"
            className="form-control"
            id="dest"
            value = {dest}
            onChange ={this.handleChange}/>
        </div>        
        <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input 
            type="text"
            className="form-control"
            id="weight"
            value = {weight}
            onChange ={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
        </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;

