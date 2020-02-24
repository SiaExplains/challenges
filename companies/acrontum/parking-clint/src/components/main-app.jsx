import React, { Component } from 'react';
import LevelComponent from './level/level';
import { defineLot } from '../redux/actions/index';
import { connect } from 'react-redux';
import { Container, Row, Col, Badge } from 'reactstrap';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    componentDidMount() {
        this.initParkingLotsWithMockData();
    }

    /* we can fetch data by axios from server/api (back-end)
       If need, I can implement back-end as well!
    */
    initParkingLotsWithMockData = () => {
        const { dispatch, lots } = this.props;
        let id = 0;
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 36; j++) {
                let fill = Math.floor(Math.random() * 7) == 1 ? true : false;
                let lot = {
                    id: ++id,
                    number: j,
                    level: i,
                    fill: fill,
                    carPlate: fill ? 'MOCK-PLATE' : ''
                };
                dispatch(defineLot(lot));
            }
        }
    };

    messageCallBackHandler = msg => {
        this.setState({
            message: msg
        });
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Parking Lot Management App </h2>
                    </Col>
                    <Col>
                        <h3>
                            <Badge color='danger'>{this.state.message}</Badge>
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <LevelComponent
                            title='level 1st'
                            level='1'
                            messageCallBackHandler={this.messageCallBackHandler}
                        />
                        <LevelComponent
                            title='level 2nd'
                            level='2'
                            messageCallBackHandler={this.messageCallBackHandler}
                        />
                        <LevelComponent
                            title='level 3rd'
                            level='3'
                            messageCallBackHandler={this.messageCallBackHandler}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect(state => {
    return {
        state,
        lots: state
    };
})(MainApp);
