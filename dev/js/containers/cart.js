import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart } from '../actions/actions-cart';
import {
    Panel,
    Col,
    Row,
    Well,
    Button,
    ButtonGroup,
    Label,
    Modal
} from 'react-bootstrap';

class Cart extends Component {
    onDelete(_id) {
        // Create a copy of the current array of Books in the cart
        const currentBookToDelete = this.props.cart;

        // Determine at which index in cart array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(function(cart) {
            return cart._id === _id;
        });
        // Use slice to remove the book at the specified index
        let cartAfterDelete = [
            ...currentBookToDelete.slice(0, indexToDelete),
            ...currentBookToDelete.slice(indexToDelete + 1)
        ];

        this.props.deleteCartItem(cartAfterDelete);
    }

    onIncrement(_id) {
        this.props.updateCart(_id, 1);
    }

    onDecrement(_id, quantity) {
        if (quantity > 1) {
            this.props.updateCart(_id, -1);
        }
    }

    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }
    open() {
        this.setState({ showModal: true });
    }
    close() {
        this.setState({ showModal: false });
    }

    renderEmpty() {
        return <div />;
    }

    renderCart() {
        const cartItemsList = this.props.cart.map(function(cartArr) {
            return (
                <Panel key={cartArr._id}>
                    <Panel.Body>
                        <Row>
                            <Col xs={12} sm={4}>
                                <h6>{cartArr.title}</h6>
                                <span> </span>
                            </Col>
                            <Col xs={6} sm={2}>
                                <h6>AUD. {cartArr.price}</h6>
                            </Col>
                            <Col xs={6} sm={2}>
                                <h6>
                                    qty.{' '}
                                    <Label bsStyle="success">
                                        {cartArr.quantity}
                                    </Label>
                                </h6>
                            </Col>
                            <Col xs={6} sm={4}>
                                <ButtonGroup style={{ minWidth: '300px' }}>
                                    <Button
                                        onClick={this.onDecrement.bind(
                                            this,
                                            cartArr._id,
                                            cartArr.quantity
                                        )}
                                        bsStyle="default"
                                        bsSize="small"
                                    >
                                        -
                                    </Button>
                                    <Button
                                        onClick={this.onIncrement.bind(
                                            this,
                                            cartArr._id
                                        )}
                                        bsStyle="default"
                                        bsSize="small"
                                    >
                                        +
                                    </Button>
                                    <span> </span>
                                    <Button
                                        onClick={this.onDelete.bind(
                                            this,
                                            cartArr._id
                                        )}
                                        bsStyle="danger"
                                        bsSize="small"
                                    >
                                        DELETE
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Panel.Body>
                </Panel>
            );
        }, this); //Writing this here ensure the onclick event is in the right context
        return (
            <Panel bsStyle="primary">
                <Panel.Heading>Cart</Panel.Heading>
                <Panel.Body>
                    {cartItemsList}
                    <Row>
                        <Col xs={12}>
                            <h6>Total Amount: {this.props.totalAmount}</h6>
                            <Button
                                onClick={this.open.bind(this)}
                                bsStyle="success"
                                bsSize="small"
                            >
                                PROCEED TO CHECKOUT
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Modal
                            show={this.state.showModal}
                            onHide={this.close.bind(this)}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Thank you!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h6>Your order has been saved</h6>
                                <p>You will receive an email confirmation</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Col xs={6}>
                                    <h6>total $:{this.props.totalAmount}</h6>
                                </Col>
                                <Button onClick={this.close.bind(this)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Panel.Body>
            </Panel>
        );
    }

    render() {
        if (this.props.cart[0]) {
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            deleteCartItem: deleteCartItem,
            updateCart: updateCart
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
