import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';

class BookItem extends Component {
    render() {
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <p>{this.props.price}</p>
                        <Button bsStyle="primary">Buy Now</Button>
                    </Col>
                </Row>
            </Well>
        );
    }
}

export default BookItem;

