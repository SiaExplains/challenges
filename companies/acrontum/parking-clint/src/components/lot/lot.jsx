import React, { Component } from 'react';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import './lot.css';
import { connect } from 'react-redux';
import { parkACar, releaseLot } from '../../redux/actions/index';

class LotComponent extends Component {
    parkACar = () => {
        const { dispatch, lots } = this.props;
        if (this.props.lot.fill) {
            if (
                window.confirm(
                    `This lot is used by [${this.props.lot.carPlate}], Does the car leave the parking lot?`
                )
            ) {
                dispatch(releaseLot(this.props.lot));
            }
            return;
        }
        if (lots.some(l => l.level < this.props.lot.level && !l.fill)) {
            alert('There are empty parking lots at bottom level');
            return;
        }

        let carPlate = window.prompt('Enter plate number for park: ');
        if (carPlate) {
            dispatch(parkACar(this.props.lot, carPlate));
        }
    };

    componentDidUpdate() {
        const { dispatch, lots } = this.props;
        if (lots.every(l => l.fill === true)) {
            this.props.messageCallBackHandler('All Parking lots are full!!!');
        } else {
            this.props.messageCallBackHandler('');
        }
    }

    render() {
        return (
            <Container
                className={'m-2 ' + (this.props.lot.fill ? 'lot-fill' : 'lot')}
                onClick={this.parkACar}
            >
                <Row>
                    <Col>
                        <Label role='button'>
                            <h3>
                                {this.props.lot.number
                                    .toString()
                                    .padStart(2, '0')}
                            </h3>
                            {this.props.lot.fill}
                        </Label>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect(state => ({
    lots: state
}))(LotComponent);
