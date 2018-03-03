import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers, selectUser } from '../actions/actions-user';

class UserList extends Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getUsers();
    }

    renderList() {
        if (this.props.users) {
            return this.props.users.map(user => {
                return (
                    <li
                        key={user.id}
                        onClick={() => this.props.selectUser(user)}
                    >
                        {user.first} {user.last}
                    </li>
                );
            });
        } else {
            return <p>No this.props.users</p>;
        }
    }
    //
    render() {
        console.log('Users', this.props.users);
        return (
            <div>
                <h2>User List</h2>
                <ul>{this.renderList()}</ul>
            </div>
        );
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
            selectUser: selectUser
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
