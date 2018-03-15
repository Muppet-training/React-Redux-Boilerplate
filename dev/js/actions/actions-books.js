import axios from 'axios';

// GET BOOKS
export function getBooks() {
    return {
        type: 'GET_BOOK'
    };
}

// POST books
export function postBooks(book) {
    return function(dispatch) {
        axios
            .post('/books', book)
            .then(function(response) {
                dispatch({ type: 'POST_BOOK', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'POST_BOOK_REJECTED',
                    payload: 'There was an error while posting book'
                });
            });
    };

    // return {
    //     type: 'POST_BOOK',
    //     payload: book
    // };
}

// DELETE BOOKS
export function deleteBooks(id) {
    return {
        type: 'DELETE_BOOK',
        payload: id
    };
}

// UPDATE BOOKS
export function updateBooks(book) {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    };
}
