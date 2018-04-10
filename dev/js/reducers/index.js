import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { booksReducers } from './reducer-books';
import { userReducers } from './reducer-users';
import { cartReducers } from './reducer-cart';
import ActiveUserReducer from './reducer-active-user';
import { shareholdersReducers } from './reducer-shareholders';
import { singleReducers } from './reducer-single';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    form: formReducer,
    books: booksReducers,
    users: userReducers,
    cart: cartReducers,
    activeUser: ActiveUserReducer,
    shareholders: shareholdersReducers,
    single: singleReducers
});

export default allReducers;
