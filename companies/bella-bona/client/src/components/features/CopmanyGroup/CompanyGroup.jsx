import React, { Component } from 'react';
import CustomerOrder from '../CustomerOrder/CustomerOrder';
import './CompanyGroup.css';

class CompanyGroup extends Component {
    render() {
        const { orders } = this.props;
        return (
            <div className='CopmanyGroup'>
                <h2>{this.props.orders[0].companyName}</h2>
                {orders.map(order => {
                    return <CustomerOrder order={order} />;
                })}
            </div>
        );
    }
}

export default CompanyGroup;
