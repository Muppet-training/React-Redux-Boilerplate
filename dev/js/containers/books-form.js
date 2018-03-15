import React, { Component } from 'react';
import {
    MenuItem,
    InputGroup,
    DropdownButton,
    Image,
    Col,
    Row,
    Well,
    Panel,
    FormControl,
    FormGroup,
    ControlLabel,
    Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postBooks, deleteBooks } from '../actions/actions-books';

class BooksForm extends Component {
    handleSubmit() {
        const book = [
            {
                title: findDOMNode(this.refs.title).value,
                description: findDOMNode(this.refs.description).value,
                price: findDOMNode(this.refs.price).value
            }
        ];
        this.props.postBooks(book);
    }

    onDelete() {
        let bookId = findDOMNode(this.refs.delete).value;

        console.log(bookId);
        this.props.deleteBooks(bookId);
    }

    render() {
        const booksList = this.props.books.map(function(booksArr) {
            return (
                <option value={booksArr._id} key={booksArr._id}>
                    {booksArr.title}
                </option>
            );
        });

        return (
            <div>
                <Well>
                    <Panel>
                        <Panel.Body>
                            <FormGroup controlId="title">
                                <ControlLabel>Title</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter Title"
                                    ref="title"
                                />
                            </FormGroup>
                            <FormGroup controlId="description">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter Description"
                                    ref="description"
                                />
                            </FormGroup>
                            <FormGroup controlId="price">
                                <ControlLabel>Price</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Enter Price"
                                    ref="price"
                                />
                            </FormGroup>
                            <Button
                                onClick={this.handleSubmit.bind(this)}
                                bsStyle="primary"
                            >
                                Save Book
                            </Button>
                        </Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>
                            <FormGroup controlId="formControlSelect">
                                <ControlLabel>Select</ControlLabel>
                                <FormControl
                                    ref="delete"
                                    componentClass="select"
                                    placeholder="select"
                                    // onChange={this.onDelete.bind(this)}
                                >
                                    <option value="-1">
                                        select a book id to delete
                                    </option>
                                    {booksList}
                                </FormControl>
                            </FormGroup>
                            <Button
                                onClick={this.onDelete.bind(this)}
                                bsStyle="danger"
                            >
                                Delete Book
                            </Button>
                        </Panel.Body>
                    </Panel>
                </Well>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postBooks, deleteBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
