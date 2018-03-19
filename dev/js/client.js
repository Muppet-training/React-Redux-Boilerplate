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
import AdminForms from './components/admin-forms';

import { addToCart } from './actions/actions-cart';
import { postBooks, deleteBooks, updateBooks } from './actions/actions-books';
import { postUser, deleteUser, updateUser } from './actions/actions-user';

import Footer from './components/footer';
import About from './components/about';
import Shareholders from './components/shareholders';

import Menu from './containers/menu';
import BooksList from './containers/books-list';
import BooksForm from './containers/books-form';
import Cart from './containers/cart';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

const Routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/admin" component={AdminForms} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/about" component={About} />
                    <Route path="/share" component={Shareholders} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Routes, document.getElementById('root'));
