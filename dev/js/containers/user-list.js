import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserEditForm from './user-edit-form';
import {
    Row,
    Col,
    Button,
    Grid,
    Panel,
    ButtonGroup,
    Modal
} from 'react-bootstrap';

import {
    getUsers,
    selectUser,
    deleteUser
    // editUser
} from '../actions/actions-user';

class UserList extends Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getUsers();
    }

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        // this.click = this.click.bind(this);
    }
    open_modal() {
        this.setState({ showModal: true });
    }

    close_modal() {
        this.setState({ showModal: false });
    }

    click(user) {
        this.props.selectUser(user);
        this.open_modal();
    }

    removeItem() {
        console.log('clicked');
        this.child.close();
    }

    renderList() {
        const listOfUsers = this.props.users.map(function(user) {
            return (
                <Panel key={user._id}>
                    <Panel.Body>
                        <Row>
                            <Col
                                xs={12}
                                sm={7}
                                onClick={() => this.props.selectUser(user)}
                            >
                                {user._id} - {user.first} {user.last}
                            </Col>
                            <Col xs={12} sm={5}>
                                <ButtonGroup
                                    // style={{ minWidth: '300px' }}
                                    //
                                    className="pull-right"
                                >
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
            <Row>
                <Col xs={12}>
                    <Panel key="user_panel" bsStyle="primary">
                        <Panel.Heading>User List</Panel.Heading>
                        <Panel.Body>{listOfUsers}</Panel.Body>
                    </Panel>
                </Col>

                <Modal
                    show={this.state.showModal}
                    onHide={this.close_modal.bind(this)}
                    id="IDModal"
                    ref={ref => {
                        this.child = ref;
                    }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UserEditForm
                            close_modal={this.close_modal.bind(this)}
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close_modal.bind(this)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
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
