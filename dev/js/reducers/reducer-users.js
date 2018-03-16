/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export function userReducers(state = { users: [] }, action) {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: [...action.payload] };

        case 'POST_USER':
            // let users = state.users.concat(action.payload);
            return {
                users: [...state.users, ...action.payload]
            };
        case 'DELETE_USER':
            // Create copy of current state array
            const currentUserToDelete = [...state.users];
            // DEtermine at which index in the users arrray is the user to delete

            // console.log('Delete User ---->', user);

            const indexToDelete = currentUserToDelete.findIndex(function(user) {
                console.log('user------------->', user);
                console.log('action.payload------------->', action.payload);
                console.log('user._id------------->', action.payload);
                return user._id === action.payload;
            });
            // Use slice to remove the user at the specified indexToDelete
            return {
                users: [
                    ...currentUserToDelete.slice(0, indexToDelete),
                    ...currentUserToDelete.slice(indexToDelete + 1)
                ]
            };
        case 'UPDATE_USER':
            // Create a copy of the current array of books;
            const currentStateOfUsers = [...state.users];
            // Determine at which index in booksarray is the book to be deleted

            // console.log('currentStateOfUsers', currentStateOfUsers);

            const indexToUpdate = currentStateOfUsers.findIndex(function(user) {
                // typeof user._id => Will tell you the type of varible the value is
                // console.log('user._id typeof -->', typeof user._id);
                return user._id === action.payload._id;
            });
            // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
            // console.log('indexToUpdate', indexToUpdate);
            const newUserToUpdate = {
                ...currentStateOfUsers[indexToUpdate],
                _id: action.payload._id,
                first: action.payload.first,
                last: action.payload.last,
                age: action.payload.age,
                description: action.payload.description
            };
            // This Log has the purpose to show you how newBookToUpdate looks like
            // console.log('what is it newUserToUpdate', newUserToUpdate);

            //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array;
            return {
                users: [
                    ...currentStateOfUsers.slice(0, indexToUpdate),
                    newUserToUpdate,
                    ...currentStateOfUsers.slice(indexToUpdate + 1)
                ]
            };
            break;
    }
    return state;
}

// export default function() {
//     return [
//         {
//             id: 1,
//             first: 'Tom',
//             last: 'Curphey',
//             age: 26,
//             description: 'Is trying to learn programming',
//             thumbnail: 'https://i.imgur.com/C15omPL.png'
//         },
//         {
//             id: 2,
//             first: 'Egg',
//             last: 'Man',
//             age: 58,
//             description: 'I workout!',
//             thumbnail: 'https://i.imgur.com/cX0rUbJ.png'
//         }
//     ];
// }

// export function userReducers(
//     state = {
//         users: [
//             {
//                 id: 1,
//                 first: 'Tom',
//                 last: 'Curphey',
//                 age: 26,
//                 description: 'Is trying to learn programming',
//                 thumbnail: 'https://i.imgur.com/C15omPL.png'
//             },
//             {
//                 id: 2,
//                 first: 'Egg',
//                 last: 'Man',
//                 age: 58,
//                 description: 'I workout!',
//                 thumbnail: 'https://i.imgur.com/cX0rUbJ.png'
//             }
//         ]
//     },
//     action
// ) {
//     switch (action.type) {
//         case 'GET_USERS':
//             return { ...state, users: [...state.users] };
//             break;
//         default:
//     }
// }
