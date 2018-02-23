// GET BOOKS
export function getBooks() {
    return {
        type: 'GET_BOOK'
    };
}

// POST books
export function postBooks(book) {
    return {
        type: 'POST_BOOK',
        payload: book
    };
}

// DELETE BOOKS
export function deleteBooks(id) {
    return {
        type: 'DELETE_BOOKS',
        payload: id
    };
}

// UPDATE BOOKS
export function updateBooks(book) {
    return {
        type: 'UPDATE_BOOKS',
        payload: book
    };
}
