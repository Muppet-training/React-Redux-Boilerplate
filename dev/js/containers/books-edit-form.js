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

import { getBooks, deleteBooks, updateBooks } from '../actions/actions-books';

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

    handleEditSubmit = idx => evt => {
        // const form = this.form.value;
        console.log('idx==>', idx);
        console.log('evt.target.value==>', evt.target.value);

        const newBook = this.props.books.map((book, sidx) => {
            if (idx !== sidx) return book;
            return { ...book, title: evt.target.value };
        });

        console.log('newBook', newBook);

        const book = {
            _id: this._id.value,
            title: this.title.value,
            description: this.description.value,
            price: this.price.value
        };

        // console.log('Edit Book: ', book);
        // this.props.updateBooks(book);
    };

    handleBookTitleChange = idx => evt => {
        console.log('idx==>', idx);
        console.log('evt.target.value==>', evt.target.value);

        const newBookTitle = this.props.books.map((book, sidx) => {
            if (idx !== sidx) return book;
            return { ...book, title: evt.target.value };
        });

        console.log('newBookTitle==>', newBookTitle[idx]);
        this.props.updateBooks(newBookTitle[idx]);
        // this.setState({ shareholders: newShareholders });
    };

    handleBookDescriptionChange = idx => evt => {
        console.log('idx==>', idx);
        console.log('evt.target.value==>', evt.target.value);

        const newBookDescription = this.props.books.map((book, sidx) => {
            if (idx !== sidx) return book;
            return { ...book, description: evt.target.value };
        });

        console.log('newBookDescription==>', newBookDescription[idx]);
        this.props.updateBooks(newBookDescription[idx]);
        // this.setState({ shareholders: newShareholders });
    };

    handleBookPriceChange = idx => evt => {
        console.log('idx==>', idx);
        console.log('evt.target.value==>', evt.target.value);

        const newBookPrice = this.props.books.map((book, sidx) => {
            if (idx !== sidx) return book;
            return { ...book, price: evt.target.value };
        });

        console.log('newBookPrice==>', newBookPrice[idx]);
        this.props.updateBooks(newBookPrice[idx]);
        // this.setState({ shareholders: newShareholders });
    };

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
                            onChange={this.handleBookTitleChange(idx)}
                            inputRef={ref => {
                                this.title = ref;
                            }}
                            // id={index}
                            defaultValue={bookToEdit.title}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Description"
                            onChange={this.handleBookDescriptionChange(idx)}
                            inputRef={ref => {
                                this.description = ref;
                            }}
                            defaultValue={bookToEdit.description}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Price"
                            onChange={this.handleBookPriceChange(idx)}
                            inputRef={ref => {
                                this.price = ref;
                            }}
                            defaultValue={bookToEdit.price}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <ButtonGroup
                        // style={{ minWidth: '300px' }}
                        //
                        className="pull-right"
                    >
                        <Button
                            onClick={this.handleEditSubmit(idx)}
                            bsStyle="default"
                            bsSize="small"
                        >
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

        return (
            <div>
                <Well>
                    <Panel>
                        <Panel.Body>
                            <form
                                ref={form => {
                                    this.form = form;
                                }}
                            >
                                {booksEditList}
                            </form>
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
    return bindActionCreators(
        {
            getBooks: getBooks,
            deleteBooks: deleteBooks,
            updateBooks: updateBooks
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksEditForm);
