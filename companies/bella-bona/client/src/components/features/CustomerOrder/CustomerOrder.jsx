import React, { Component } from 'react';
import './CustomerOrder.css';
class CustomerOrder extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { customerName, deliveryDate, dishName } = this.props.order;
        return (
            <div className='CustomerOrder'>
                <h5>Customer Name: {customerName}</h5>
                <h5>Delivery: {deliveryDate}</h5>
                <h5>Dish: {dishName}</h5>
            </div>
        );
    }
}
export default CustomerOrder;
