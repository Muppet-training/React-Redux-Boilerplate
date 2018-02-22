// Post user
export function postUser(user) {
    return {
        type: 'POST_USER',
        payload: user
    };
}

// Delete user
export function deleteUser(id) {
    return {
        type: 'DELETE_USER',
        payload: id
    };
}

// Update User
export function updateUser(user) {
    return {
        type: 'UPDATE_USER',
        payload: user
    };
}

