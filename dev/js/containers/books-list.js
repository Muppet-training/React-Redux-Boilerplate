import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../actions/actions-books';
import { Row, Col, Button, Grid } from 'react-bootstrap';

import BookItem from './book-item';
import BooksForm from './books-form';

class BooksList extends Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getBooks();
    }

    render() {
        // console.log(
        //     'Accessing the state from this.props.books',
        //     this.props.books
        // );

        const booksList = this.props.books.map(function(booksArr) {
            return (
                <Col xs={12} key={booksArr.id}>
                    <BookItem
                        id={booksArr.id}
                        title={booksArr.title}
                        description={booksArr.description}
                        price={booksArr.price}
                    />
                </Col>
            );
        });

        return (
            <Grid>
                <Row style={{ marginTop: '15px' }}>
                    <Col xs={12} sm={6}>
                        <BooksForm />
                    </Col>
                    <Col xs={12} sm={6}>
                        {booksList}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

//The Provider passes the store/state to the components as a property.
// Properties are the values associated with a JavaScript object
// This function grabs the state from the property value and does like a foreach loop throguh it.
// In doing so this subscribes the component to the store so it updates automatically as the store changes
// This looks for books in the sate and
function mapStateToProps(state) {
    return {
        books: state.books.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getBooks: getBooks
        },
        dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
