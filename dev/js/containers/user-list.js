import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Row,
    Col,
    Button,
    Grid,
    Panel,
    ButtonGroup,
    Modal
} from 'react-bootstrap';

import { getUsers, selectUser, deleteUser } from '../actions/actions-user';

import UserForm from './user-form';

class UserList extends Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getUsers();
    }

    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.click = this.click.bind(this);
    }
    open() {
        this.setState({ showModal: true });
    }
    close() {
        this.setState({ showModal: false });
    }

    handleOpacity() {
        // gray out the background page....
        alert('test');
    }

    click(user) {
        this.props.selectUser(user);
        this.open();
        // this.props.onClick();
    }

    renderList() {
        const listOfUsers = this.props.users.map(function(user) {
            return (
                <Panel key={user._id}>
                    <Panel.Body>
                        <Row>
                            <Col
                                xs={12}
                                sm={8}
                                onClick={() => this.props.selectUser(user)}
                            >
                                {user.first} {user.last}
                            </Col>
                            <Col xs={12} sm={4}>
                                <ButtonGroup style={{ minWidth: '300px' }}>
                                    <Button
                                        // onClick={() =>
                                        //     this.props.selectUser(user)
                                        // }
                                        // onClick={this.open.bind(this)}
                                        onClick={this.click.bind(this, user)}
                                        bsStyle="default"
                                        bsSize="small"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            this.props.deleteUser(user)
                                        }
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
        }, this);

        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={6}>
                        <Panel key="user_panel" bsStyle="primary">
                            <Panel.Heading>User List</Panel.Heading>
                            <Panel.Body>
                                {listOfUsers}
                                <Row>
                                    <Modal
                                        show={this.state.showModal}
                                        onHide={this.close.bind(this)}
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit User</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h6>Your order has been saved</h6>
                                            <p>
                                                You will receive an email
                                                confirmation
                                            </p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Col xs={6}>
                                                <h6>total $:</h6>
                                            </Col>
                                            <Button
                                                onClick={this.close.bind(this)}
                                            >
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
    //
    render() {
        return this.renderList();
    }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getUsers: getUsers,
            selectUser: selectUser,
            deleteUser: deleteUser
        },
        dispatch
    );
}
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({ selectUser: selectUser }, dispatch);
// }

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(UserList);

// connect(
//     mapStateToProps,
//     mapDispatchToProps
//     // matchDispatchToProps
// )(UserList);
