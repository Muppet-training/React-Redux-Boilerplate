import axios from 'axios';

// Get users
export function getUsers() {
    return function(dispatch) {
        axios
            .get('/users')
            .then(function(response) {
                dispatch({ type: 'GET_USERS', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'GET_USERS_REJECTED',
                    payload: err
                });
            });
    };

    // return {
    //     type: 'GET_USER'
    // };
}

// Post user
export function postUser(user) {
    return function(dispatch) {
        axios
            .post('/users', user)
            .then(function(response) {
                dispatch({
                    type: 'POST_USER',
                    payload: response.data
                });
            })
            .catch(function(err) {
                dispatch({
                    type: 'POST_USER_REJECTED',
                    payload: 'there was an error while posting a new user'
                });
            });
    };

    // return {
    //     type: 'POST_USER',
    //     payload: user
    // };
}

// Delete user
export function deleteUser(id) {
    return function(dispatch) {
        axios
            .delete('/users/' + id)
            .then(function(response) {
                dispatch({ type: 'DELETE_USER', payload: id });
            })
            .catch(function(err) {
                dispatch({ type: 'DELETE_USER_REJECTED', payload: err });
            });
    };
    // console.log('Delete User ---->', id);
    // return {
    //     type: 'DELETE_USER',
    //     payload: id
    // };
}

// Update User
export function updateUser(user) {
    console.log('You are editing user: ', user._id);
    return function(dispatch) {
        axios
            // .delete('/users/' + user._id)
            .put('/users/' + user._id, user)
            .then(function(response) {
                dispatch({ type: 'UPDATE_USER', payload: user });
            })
            .catch(function(err) {
                dispatch({ type: 'UPDATE_USER_REJECTED', payload: err });
            });
    };

    // return {
    //     type: 'UPDATE_USER',
    //     payload: user
    // };
}

export const selectUser = user => {
    // console.log('You clicked on user: ', user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    };
};

// export const editUser = user => {
//     console.log('You clicked on user to edit: ', user.first);
//     return {
//         type: 'USER_EDIT',
//         payload: user
//     };
// };
