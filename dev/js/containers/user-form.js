import React, { Component } from 'react';
import {
    Well,
    Panel,
    FormControl,
    FormGroup,
    ControlLabel,
    Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postUser } from '../actions/actions-user';

class UserForm extends Component {
    handleSubmit() {
        let new_id = this.props.users.length + 1;
        console.log('--->', new_id);

        const user = [
            {
                _id: new_id,
                first: findDOMNode(this.refs.first).value,
                last: findDOMNode(this.refs.last).value,
                age: findDOMNode(this.refs.age).value,
                description: findDOMNode(this.refs.description).value
            }
        ];
        this.props.postUser(user);
    }

    // handleSubmit() {
    //     const book = [
    //         {
    //             title: findDOMNode(this.refs.title).value,
    //             description: findDOMNode(this.refs.description).value,
    //             price: findDOMNode(this.refs.price).value
    //         }
    //     ];
    //     this.props.postBooks(book);
    // }

    render() {
        return (
            <Well>
                <Panel>
                    <Panel.Body>
                        <FormGroup controlId="first">
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter First Name"
                                ref="first"
                            />
                        </FormGroup>
                        <FormGroup controlId="last">
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Last Name"
                                ref="last"
                            />
                        </FormGroup>
                        <FormGroup controlId="age">
                            <ControlLabel>Age</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Age"
                                ref="age"
                            />
                        </FormGroup>
                        <FormGroup controlId="description">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Description"
                                ref="description"
                            />
                        </FormGroup>
                        <Button
                            onClick={this.handleSubmit.bind(this)}
                            bsStyle="primary"
                        >
                            Save User
                        </Button>
                    </Panel.Body>
                </Panel>
            </Well>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
