import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import createLogger from 'redux-logger';
import { createLogger } from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';

import { addToCart } from './actions/actions-cart';
import { postBooks, deleteBooks, updateBooks } from './actions/actions-books';
import { postUser, deleteUser, updateUser } from './actions/actions-user';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);

// store.dispatch(
//     postBooks([
//         {
//             id: 1,
//             title: 'this is the book title',
//             description: 'this is the book description',
//             price: 33.33
//         },
//         {
//             id: 2,
//             title: 'this is the second book title',
//             description: 'this is the second book description',
//             price: 50
//         }
//     ])
// );

// store.dispatch(
//     postUser([
//         {
//             id: 1,
//             first: 'Tom',
//             last: 'Curphey',
//             age: 26,
//             description: 'Is trying to learn programming',
//             thumbnail: 'https://i.imgur.com/C15omPL.png'
//         },
//         {
//             id: 2,
//             first: 'Egg',
//             last: 'Man',
//             age: 58,
//             description: 'I workout!',
//             thumbnail: 'https://i.imgur.com/cX0rUbJ.png'
//         }
//     ])
// );
//
// store.dispatch(deleteUser({ id: 1 }));
//
// store.dispatch(
//     updateUser({
//         id: 2,
//         first: 'Thomas'
//     })
// );
// store.dispatch({
//     type: 'UPDATE_USER',
//     payload: {
//         id: 2,
//         first: 'Thomas'
//     }
// });

// store.dispatch(addToCart([{ id: 1 }]));
