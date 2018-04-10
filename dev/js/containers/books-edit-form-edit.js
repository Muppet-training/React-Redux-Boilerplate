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
    Button,
    ButtonGroup
} from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import {
    getBooks,
    deleteBooks,
    updateBooks,
    postBooks
} from '../actions/actions-books';

class BooksEditForm extends Component {
    // handleEditSubmit() {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        // Dispatch an action
        this.props.getBooks();
    }

    click(user) {
        this.handleEditSubmit();
    }

    handleBookTitleChange = idx => evt => {
        const newBookTitle = this.props.books.map((book, sidx) => {
            if (idx !== sidx) return book;
            return { ...book, title: evt.target.value };
        });
        console.log('newBookTitle==>', newBookTitle[idx]);
        this.props.updateBooks(newBookTitle[idx]);
    };

    handleBookDescriptionChange = idx => evt => {
        const newBookDescription = this.props.books.map((book, sidx) => {
            if (idx !== sidx) return book;
            return { ...book, description: evt.target.value };
        });
        console.log('newBookDescription==>', newBookDescription[idx]);
        this.props.updateBooks(newBookDescription[idx]);
    };

    handleBookPriceChange = idx => evt => {
        const newBookPrice = this.props.books.map((book, sidx) => {
            if (idx !== sidx) return book;
            return { ...book, price: evt.target.value };
        });
        console.log('newBookPrice==>', newBookPrice[idx]);
        this.props.updateBooks(newBookPrice[idx]);
    };

    handleBookAddBook = () => {
        const book = [
            {
                title: '',
                description: '',
                price: 0
            }
        ];
        this.props.postBooks(book);
    };

    checkValue(bookValue) {
        console.log('Value: ', bookValue);
        if (bookValue == null) {
            console.log('Value: ', bookValue);
            return '';
        }
        return bookValue;
    }

    render() {
        console.log('State Books As Props: ', this.props.books);

        const booksEditList = this.props.books.map((bookToEdit, idx) => (
            <Row key={idx} className="b" id={idx}>
                <FormGroup controlId="_id">
                    <FormControl
                        type="hidden"
                        inputRef={ref => {
                            this._id = ref;
                        }}
                        value={bookToEdit._id}
                        // id={index}
                    />
                </FormGroup>
                <Col xs={12} sm={3}>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Title"
                            // ref="title"
                            // id={index}
                            value={this.checkValue(bookToEdit.title)}
                            onChange={this.handleBookTitleChange(idx)}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Description"
                            value={bookToEdit.description}
                            onChange={this.handleBookDescriptionChange(idx)}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Price"
                            value={bookToEdit.price}
                            onChange={this.handleBookPriceChange(idx)}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <ButtonGroup
                        // style={{ minWidth: '300px' }}
                        //
                        className="pull-right"
                    >
                        <Button bsStyle="default" bsSize="small">
                            Edit
                        </Button>
                        <Button
                            onClick={() =>
                                this.props.deleteBooks(bookToEdit._id)
                            }
                            bsStyle="danger"
                            bsSize="small"
                        >
                            DELETE
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        ));
        const booksList = this.props.books.map(function(booksArr, idx) {
            // const booksList = this.props.books.map(function(booksArr) {
            // const booksList = this.props.books.map(booksArr => (
            return (
                <li key={idx}>
                    <input
                        id="titie"
                        type="text"
                        placeholder="Enter Title"
                        value={booksArr.title}
                    />
                    {/* {booksArr.title} */}
                </li>
            );
        });
        return (
            <div>
                <Well>
                    <Panel>
                        <Panel.Body>{booksEditList}</Panel.Body>
                    </Panel>
                    {/* <Panel>
                        <Panel.Body>
                            <ul>{booksList}</ul>
                        </Panel.Body>
                    </Panel> */}
                    <button
                        onClick={this.handleBookAddBook}
                        className="btn btn-primary btn-center"
                    >
                        + Add
                    </button>
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
    return bindActionCreators(
        {
            getBooks: getBooks,
            deleteBooks: deleteBooks,
            updateBooks: updateBooks,
            postBooks: postBooks
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksEditForm);
