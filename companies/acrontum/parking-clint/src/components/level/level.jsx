import React, { Component } from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import './level.css';
import LotComponent from '../lot/lot';
import { connect } from 'react-redux';

class LevelComponent extends Component {
    messageCallBackHandler = msg => {
        this.props.messageCallBackHandler(msg);
    };
    render() {
        const { lots } = this.props;

        return (
            <Container className='level'>
                <Row>
                    <Col>
                        <h4>
                            <Badge color='info'>Level {this.props.title}</Badge>
                        </h4>
                    </Col>
                </Row>
                <Row>
                    {lots
                        .filter(x => x.level == this.props.level)
                        .slice(0, 9)
                        .map(c => {
                            return (
                                <Col>
                                    <LotComponent
                                        lot={c}
                                        key={c.id}
                                        messageCallBackHandler={
                                            this.messageCallBackHandler
                                        }
                                    />
                                </Col>
                            );
                        })}
                </Row>
                <Row>
                    {lots
                        .filter(x => x.level == this.props.level)
                        .slice(9, 18)
                        .map(c => {
                            return (
                                <Col>
                                    <LotComponent
                                        lot={c}
                                        key={c.id}
                                        messageCallBackHandler={
                                            this.messageCallBackHandler
                                        }
                                    />
                                </Col>
                            );
                        })}
                </Row>
                <Row>
                    {lots
                        .filter(x => x.level == this.props.level)
                        .slice(18, 27)
                        .map(c => {
                            return (
                                <Col>
                                    <LotComponent
                                        lot={c}
                                        key={c.id}
                                        messageCallBackHandler={
                                            this.messageCallBackHandler
                                        }
                                    />
                                </Col>
                            );
                        })}
                </Row>
                <Row>
                    {lots
                        .filter(x => x.level == this.props.level)
                        .slice(27, 36)
                        .map(c => {
                            return (
                                <Col>
                                    <LotComponent
                                        lot={c}
                                        key={c.id}
                                        messageCallBackHandler={
                                            this.messageCallBackHandler
                                        }
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        );
    }
}

export default connect(state => ({
    lots: state
}))(LevelComponent);
