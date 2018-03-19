import axios from 'axios';

// GET SHAREHOLDERS
export function getShareholders() {
    return function(dispatch) {
        axios
            .get('/shareholders')
            .then(function(response) {
                dispatch({ type: 'GET_SHAREHOLDERS', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'GET_SHAREHOLDERS_REJECTED',
                    payload: err
                });
            });
    };
}

// POST SHERHOLDERS
export function postShareholders(shareholder) {
    return function(dispatch) {
        axios
            .post('/shareholders', shareholder)
            .then(function(response) {
                dispatch({ type: 'POST_SHAREHOLDER', payload: response.data });
            })
            .catch(function(err) {
                dispatch({
                    type: 'POST_SHAREHOLDER_REJECTED',
                    payload: 'There was an error while posting shareholder'
                });
            });
    };
}

export function removeShareholder(id) {
    console.log('idxx:', id);

    return function(dispatch) {
        axios
            .delete('/shareholders/' + id)
            .then(function(response) {
                dispatch({
                    type: 'DELETE_SHAREHOLDER',
                    payload: id
                });
            })
            .catch(function(err) {
                dispatch({
                    type: 'DELETE_SHAREHOLDER_REJECTED',
                    payload: err
                });
            });
    };
}
