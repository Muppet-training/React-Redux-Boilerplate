import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, updateCart } from '../actions/actions-cart';

class BookItem extends Component {
    handleCart() {
        const book = [
            ...this.props.cart,
            {
                _id: this.props._id,
                title: this.props.title,
                decription: this.props.decription,
                price: this.props.price,
                quantity: 1
            }
        ];
        //Check if Cart is renderEmpty
        if (this.props.cart.length > 0) {
            // Cart is not Empty check if there is product with the same ID

            let _id = this.props._id;

            let cartIndex = this.props.cart.findIndex(function(cart) {
                return cart._id === _id;
            });
            // if returns -1 there are no items with the same id
            if (cartIndex === -1) {
                this.props.addToCart(book);
            } else {
                // We need to update quantity
                this.props.updateCart(_id, 1);
            }
        } else {
            // Cart is empty
            this.props.addToCart(book);
        }
    }

    render() {
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <p>{this.props.price}</p>
                        <Button
                            onClick={this.handleCart.bind(this)}
                            bsStyle="primary"
                        >
                            Buy Now
                        </Button>
                    </Col>
                </Row>
            </Well>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addToCart: addToCart,
            updateCart: updateCart
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
