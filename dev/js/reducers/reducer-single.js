/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export function singleReducers(state = { single: [] }, action) {
    switch (action.type) {
        case 'GET_SINGLE':
            return { ...state, single: [...action.payload] };
        case 'POST_SINGLE':
            // let books = state.books.concat(action.payload);
            // return {books};
            console.log('Updating State..', action.payload);
            return {
                single: [...state.single, action.payload]
            };
            break;
        case 'DELETE_SINGLE':
            // Create a copy of the current array of books;
            const currenSingleToDelete = [...state.single];
            // Determine at which index in books array is the book to be deleted

            console.log(
                'currenSingleToDelete------------->',
                currenSingleToDelete
            );
            const indexToDelete = currenSingleToDelete.findIndex(function(
                single
            ) {
                console.log('single------------->', single);
                console.log('action.payload------------->', action.payload);
                console.log('single._id------------->', single._id);

                return single._id === action.payload;
            });

            console.log('indexToDelete------------->', indexToDelete);

            //use slice to remove the book at the specified index
            return {
                books: [
                    ...currenSingleToDelete.slice(0, indexToDelete),
                    ...currenSingleToDelete.slice(indexToDelete + 1)
                ]
            };
            break;
        case 'UPDATE_BOOK':
            // Create a copy of the current array of books;
            const currentSingleState = [...state.single];
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentSingleState.findIndex(function(
                single
            ) {
                return single._id === action.payload._id;
            });
            // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat method as well
            console.log('indexToUpdate', indexToUpdate);
            console.log('_id', action.payload._id);
            console.log('title', action.payload.title);

            const newSingleToUpdate = {
                ...currentSingleState[indexToUpdate],
                _id: action.payload._id,
                title: action.payload.title,
                description: action.payload.description,
                price: action.payload.price
            };
            // This Log has the purpose to show you how newBookToUpdate looks like
            console.log('what is the newSingleToUpdate', newSingleToUpdate);
            //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
            return {
                books: [
                    ...currentSingleState.slice(0, indexToUpdate),
                    newSingleToUpdate,
                    ...currentSingleState.slice(indexToUpdate + 1)
                ]
            };
            break;
    }
    return state;
}
