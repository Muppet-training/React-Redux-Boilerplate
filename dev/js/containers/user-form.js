import React, { Component } from 'react';
import {
    Well,
    Panel,
    FormControl,
    FormGroup,
    ControlLabel,
    Button
} from 'react-bootstrap';
// import { connect } from 'react-redux';

class UserForm extends Component {
    render() {
        return (
            <Well>
                <Panel>
                    <Panel.Body>
                        <FormGroup controlId="title">
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Title"
                                ref="title"
                            />
                        </FormGroup>
                        <FormGroup controlId="title">
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
                        <Button bsStyle="primary">Save USer</Button>
                    </Panel.Body>
                </Panel>
            </Well>
        );
    }
}

export default UserForm;
