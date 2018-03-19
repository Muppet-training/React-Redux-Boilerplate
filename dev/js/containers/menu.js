import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';

import { connect } from 'react-redux';

class Menu extends Component {
    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="/contacts">
                            Contact Us
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={3} href="/share">
                            Share
                        </NavItem>
                        <NavItem eventKey={4} href="/admin">
                            Admin
                        </NavItem>
                        <NavItem eventKey={5}>
                            Your Cart
                            {this.props.totalQty > 0 ? ( // if # ofitems in cart is > 0
                                <Badge className="badge">
                                    {this.props.totalQty}
                                </Badge>
                            ) : (
                                ''
                            )}
                            {/* display the # of items in cart, if
zero items, display nothing :{''} */}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalQty: state.cart.totalQty
    };
}

export default connect(mapStateToProps)(Menu);
