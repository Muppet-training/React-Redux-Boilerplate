import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import {
    Row,
    Col,
    Button,
    Grid,
    Panel,
    ButtonGroup,
    Modal,
    FormGroup,
    ControlLabel,
    FormControl,
    Well
} from 'react-bootstrap';

import { updateUser } from '../actions/actions-user';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserEditForm extends Component {
    constructor(props) {
        super(props);
        // this.props.func(this, 1234);
    }
    click() {
        this.handleSubmit();
        this.close();
    }

    close() {
        console.log('CLose Bitch');
        this.setState({ showModal: false });
    }

    // open() {
    //     this.setState({ showModal: true });
    // }

    handleSubmit() {
        const user = {
            _id: Number(findDOMNode(this.refs._id).value),
            first: findDOMNode(this.refs.first).value,
            last: findDOMNode(this.refs.last).value,
            age: findDOMNode(this.refs.age).value,
            description: findDOMNode(this.refs.description).value
        };

        console.log(user);
        this.props.updateUser(user);
    }

    render() {
        if (!this.props.user) {
            return <div className="EDIT_USER" />;
        }
        return (
            <div>
                <FormGroup controlId="first">
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter First Name"
                        ref="first"
                        defaultValue={this.props.user.first}
                        // onChange={this.handleInputChange.bind(this)}
                    />
                </FormGroup>
                <FormGroup controlId="last">
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Last Name"
                        ref="last"
                        defaultValue={this.props.user.last}
                        // onChange={this.handleInputChange.bind(this)}
                    />
                </FormGroup>
                <FormGroup controlId="age">
                    <ControlLabel>Age</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Age"
                        ref="age"
                        defaultValue={this.props.user.age}
                        // onChange={this.handleInputChange.bind(this)}
                    />
                </FormGroup>
                <FormGroup controlId="description">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter Description"
                        ref="description"
                        defaultValue={this.props.user.description}
                        // onChange={this.handleInputChange.bind(this)}
                    />
                </FormGroup>
                <FormGroup controlId="_id">
                    <FormControl
                        type="hidden"
                        ref="_id"
                        value={this.props.user._id}
                    />
                </FormGroup>
                <Button
                    // onClick={this.handleSubmit.bind(this)}
                    onClick={this.click.bind(this)}
                    bsStyle="primary"
                >
                    Save User
                </Button>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);
