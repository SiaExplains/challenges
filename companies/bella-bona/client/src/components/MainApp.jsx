import React, { Component } from 'react';
import { getAllOrders } from '../services/order';
import OrderList from './features/OrderList/OrderList';
import _ from 'lodash';
export const MockDataContext = React.createContext([]);

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentWillMount() {
        this.fetchOrders();
    }

    fetchOrders = async () => {
        const { data } = await getAllOrders();
        let groupped = _.groupBy(data, function(order) {
            return order.companyName;
        });
        let final = [];
        for (let [key, value] of Object.entries(groupped)) {
            final.push(value);
        }

        this.setState({
            orders: final
        });
    };

    render() {
        let { orders } = this.state;
        return (
            <div>
                <OrderList orders={orders} />
                {/* <MockDataContext value={orders}>
                   
                     </MockDataContext> */}
            </div>
        );
    }
}

export default MainApp;
