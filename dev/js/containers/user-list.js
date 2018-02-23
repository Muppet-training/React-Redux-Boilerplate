import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getUsers } from '../actions/index';

class UserList extends Component {
    // componentDidMount() {
    //     this.props.getUsers();
    // }
    //
    renderList() {
        return this.props.users.map(user => {
            return (
                <li key={user.id}>
                    {user.first} {user.last}
                </li>
            );
        });
    }
    //onClick={() => this.props.selectUser(user)}
    render() {
        // console.log('Users', this.props.users);
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
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getUsers: getUsers }, dispatch);
// }

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({ selectUser: selectUser }, dispatch);
// }

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(UserList);

// connect(
//     mapStateToProps,
//     mapDispatchToProps
//     // matchDispatchToProps
// )(UserList);
