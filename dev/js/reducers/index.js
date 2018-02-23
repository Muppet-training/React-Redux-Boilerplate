import { combineReducers } from 'redux';
import { booksReducers } from './reducer-books';
import { userReducers } from './reducer-users';
import { cartReducers } from './reducer-cart';
import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    books: booksReducers,
    users: userReducers,
    cart: cartReducers,
    activeUser: ActiveUserReducer
});

export default allReducers;
