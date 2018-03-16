import axios from 'axios';

// GET BOOKS
export function getBooks() {
    return function(dispatch) {
        axios
            .get('/books')
            .then(function(response) {
                dispatch({ type: 'GET_BOOKS', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'GET_BOOK_REJECTED',
                    payload: err
                });
            });
    };

    // return {
    //     type: 'GET_BOOK'
    // };
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
    return function(dispatch) {
        // console.log(id);
        axios
            .delete('/books/' + id)
            .then(function(response) {
                dispatch({ type: 'DELETE_BOOK', payload: id });
            })
            .catch(function(err) {
                dispatch({ type: 'DELETE_BOOK_REJECTED', payload: err });
            });
    };

    // return {
    //     type: 'DELETE_BOOK',
    //     payload: id
    // };
}

// TASKKILL /IM node.exe /F &&

// UPDATE BOOKS
export function updateBooks(book) {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    };
}
