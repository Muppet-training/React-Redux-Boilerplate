// Getg users
export function getUsers() {
    return {
        type: 'GET_USER'
    };
}

// Post user
export function postUser(user) {
    return {
        type: 'POST_USER',
        payload: user
    };
}

// Delete user
export function deleteUser(user) {
    return {
        type: 'DELETE_USER',
        payload: user
    };
}

// Update User
export function updateUser(user) {
    // console.log('You are editing user: ', user);
    return {
        type: 'UPDATE_USER',
        payload: user
    };
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
