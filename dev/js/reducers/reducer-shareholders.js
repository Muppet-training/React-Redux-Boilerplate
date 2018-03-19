/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export function shareholdersReducers(state = { shareholders: [] }, action) {
    switch (action.type) {
        case 'GET_SHAREHOLDERS':
            return { ...state, shareholders: [...action.payload] };
        case 'POST_SHAREHOLDER':
            return {
                shareholders: [...state.shareholders, ...action.payload]
            };
            break;
        case 'DELETE_SHAREHOLDER':
            // Create a copy of the current array of books;
            const currentShareholderToDelete = [...state.shareholders];
            // Determine at which index in books array is the book to be deleted

            console.log(
                'currentShareholderToDelete------------->',
                currentShareholderToDelete
            );
            const indexToDelete = currentShareholderToDelete.findIndex(function(
                shareholder
            ) {
                console.log('shareholder------------->', shareholder);
                console.log('action.payload------------->', action.payload);
                console.log('shareholder._id------------->', action.payload);
                if (shareholder._id === action.payload) {
                    return shareholder._id === action.payload;
                }
            });
            //use slice to remove the book at the specified index
            return {
                shareholders: [
                    ...currentShareholderToDelete.slice(0, indexToDelete),
                    ...currentShareholderToDelete.slice(indexToDelete + 1)
                ]
            };
            break;
    }
    return state;
}
