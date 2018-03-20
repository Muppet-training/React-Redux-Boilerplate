/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export function booksReducers(state = { books: [] }, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return { ...state, books: [...action.payload] };
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

            console.log(
                'currentBookToDelete------------->',
                currentBookToDelete
            );
            const indexToDelete = currentBookToDelete.findIndex(function(book) {
                console.log('book------------->', book);
                console.log('action.payload------------->', action.payload);
                console.log('book._id------------->', book._id);

                return book._id === action.payload;
            });

            console.log('indexToDelete------------->', indexToDelete);

            //use slice to remove the book at the specified index
            return {
                books: [
                    ...currentBookToDelete.slice(0, indexToDelete),
                    ...currentBookToDelete.slice(indexToDelete + 1)
                ]
            };
            break;
        case 'UPDATE_BOOK':
            // Create a copy of the current array of books;
            const currentBookState = [...state.books];
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookState.findIndex(function(book) {
                return book._id === action.payload._id;
            });
            // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat method as well
            console.log('indexToUpdate', indexToUpdate);
            console.log('_id', action.payload._id);
            console.log('title', action.payload.title);

            const newBookToUpdate = {
                ...currentBookState[indexToUpdate],
                _id: action.payload._id,
                title: action.payload.title,
                description: action.payload.description,
                price: action.payload.price
            };
            // This Log has the purpose to show you how newBookToUpdate looks like
            console.log('what is the newBookToUpdate', newBookToUpdate);
            //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
            return {
                books: [
                    ...currentBookState.slice(0, indexToUpdate),
                    newBookToUpdate,
                    ...currentBookState.slice(indexToUpdate + 1)
                ]
            };
            break;
    }
    return state;
}
