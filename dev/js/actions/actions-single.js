import axios from 'axios';

// GET SHAREHOLDERS
export function getSingle() {
    return function(dispatch) {
        axios
            .get('/single')
            .then(function(response) {
                dispatch({ type: 'GET_SINGLE', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'GET_SINGLE_REJECTED',
                    payload: err
                });
            });
    };
}

// POST SINGLE
export function postSingle(single) {
    console.log('Action Single:', single);
    return function(dispatch) {
        axios
            .post('/single', single)
            .then(function(response) {
                dispatch({ type: 'POST_SINGLE', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'POST_SINGLE_REJECTED',
                    payload: 'There was an error while posting single'
                });
            });
    };
}

export function removeSingle(id) {
    console.log('idxx:', id);

    return function(dispatch) {
        axios
            .delete('/single/' + id)
            .then(function(response) {
                dispatch({
                    type: 'DELETE_SINGLE',
                    payload: id
                });
            })
            .catch(function(err) {
                dispatch({
                    type: 'DELETE_SINGLE_REJECTED',
                    payload: err
                });
            });
    };
}

// UPDATE BOOKS
export function updateSingle(single) {
    console.log('single.name', single.name);
    return function(dispatch) {
        axios
            .put('/single/' + single._id, single)
            .then(function(response) {
                dispatch({ type: 'UPDATE_SINGLE', payload: single });
            })
            .catch(function(err) {
                dispatch({ type: 'UPDATE_SINGLE_REJECTED', payload: err });
            });
    };
}
