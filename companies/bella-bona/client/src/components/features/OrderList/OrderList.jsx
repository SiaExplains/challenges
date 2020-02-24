import React, { Component } from 'react';
import { MockDataContext } from '../../MainApp';

import CompanyGroup from '../CopmanyGroup/CompanyGroup';

class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <MockDataContext.Consumer>
                    {data =>
                        data.map(groupped => <CompanyGroup orders={groupped} />)
                    }
                </MockDataContext.Consumer> */}
                {this.props.orders.map(groupped => (
                    <CompanyGroup orders={groupped} />
                ))}
            </div>
        );
    }
}

export default OrderList;
