/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export function booksReducers(
    state = {
        books: [
            {
                _id: 1,
                title: 'this is the book title',
                description: 'this is the book description',
                price: 44.33
            },
            {
                _id: 2,
                title: 'this is the second book title',
                description: 'this is the second book description',
                price: 54
            }
        ]
    },
    action
) {
    switch (action.type) {
        case 'GET_BOOK':
            return { ...state, books: [...state.books] };
        case 'POST_BOOK':
            // let books = state.books.concat(action.payload);
            // return {books};
            return {
                books: [...state.books, ...action.payload]
            };
            break;
        case 'DELETE_BOOK':
            // Create a copy of the current array of books;
            const currentBookToDelete = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToDelete = currentBookToDelete.findIndex(function(book) {
                return book._id === action.payload._id;
            });
            //use slice to remove the book at the specified index
            return {
                books: [
                    ...currentBookToDelete.slice(0, indexToDelete),
                    ...currentBookToDelete.slice(indexToDelete + 1)
                ]
            };
            break;
        case 'UPDATE_BOOK':
            // Create a copy of the current array of
            books;
            const currentBookToUpdate = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
                return book._id === action.payload._id;
            });
            // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat method as well
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            };
            // This Log has the purpose to show you how newBookToUpdate looks like
            console.log('what is it newBookToUpdate', newBookToUpdate);
            //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
            return {
                books: [
                    ...currentBookToUpdate.slice(0, indexToUpdate),
                    newBookToUpdate,
                    ...currentBookToUpdate.slice(indexToUpdate + 1)
                ]
            };
            break;
    }
    return state;
}

// const reducer = function(state = { users: [] }, action) {
// export function userReducers(state = { users: [] }, action) {
//     switch (action.type) {
//         case 'POST_USER':
//             // let users = state.users.concat(action.payload);
//             return { users: [...state.users, ...action.payload] };
//         case 'DELETE_USER':
//             // Create copy of current state array
//             const currentUserToDelete = [...state.users];
//             // DEtermine at which index in the users arrray is the user to delete
//             const indexToDelete = currentUserToDelete.findIndex(function(user) {
//                 return user.id === action.payload.id;
//             });
//             // Use slice to remove the user at the specified indexToDelete
//             return {
//                 users: [
//                     ...currentUserToDelete.slice(0, indexToDelete),
//                     ...currentUserToDelete.slice(indexToDelete + 1)
//                 ]
//             };
//         case 'UPDATE_USER':
//             // Create a copy of the current array of books;
//             const currentUserToUpdate = [...state.users];
//             // Determine at which index in booksarray is the book to be deleted
//             const indexToUpdate = currentUserToUpdate.findIndex(function(user) {
//                 return user.id === action.payload.id;
//             });
//             // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
//             const newUserToUpdate = {
//                 ...currentUserToUpdate[indexToUpdate],
//                 first: action.payload.first
//             };
//             // This Log has the purpose to show you how newBookToUpdate looks like
//             console.log('what is it newUserToUpdate', newUserToUpdate);
//             //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array;
//             return {
//                 users: [
//                     ...currentUserToUpdate.slice(
//                         0,
//
//                         indexToUpdate
//                     ),
//                     newUserToUpdate,
//                     ...currentUserToUpdate.slice(indexToUpdate + 1)
//                 ]
//             };
//             break;
//     }
// }

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
//     }
// }
