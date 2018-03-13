import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

import Menu from './components/menu';
import Footer from './components/footer';
import About from './components/about';

import BooksList from './containers/books-list';
import BooksForm from './containers/books-form';
import Cart from './containers/cart';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

// const Routes = (
//     <Provider store={store}>
//         <div>
//             <App />
//         </div>
//     </Provider>
// );

const Routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/admin" component={BooksForm} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Routes, document.getElementById('root'));
