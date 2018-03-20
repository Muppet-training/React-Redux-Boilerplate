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
import { Field, reduxForm, SubmissionError } from 'redux-form';
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

    titleInput({ input, meta: { touched, error }, ...custom }) {
        const hasError = touched && error !== undefined;
        return <div>{hasError}</div>;
    }

    submit() {
        //this
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
                        <Button bsStyle="default" bsSize="small">
                            Edit
                        </Button>
                        <Button bsStyle="danger" bsSize="small">
                            DELETE
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        ));

        const booksList = this.props.books.map(function(booksArr, idx) {
            return (
                <div>
                    <Field name="title" component={this.titleInput} />

                    <button type="submit">Submit</button>
                </div>
                // <Row key={idx}>
                //     <label>First Name</label>
                //     <div>
                //         <input
                //             name="firstName"
                //             component="input"
                //             type="text"
                //             placeholder="First Name"
                //             initialValues={booksArr.title}
                //         />
                //     </div>
                // </Row>
            );
        });

        const { handleSubmit } = this.props;

        return (
            <div>
                <Well>
                    <Panel>
                        <Panel.Body>{booksEditList}</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>
                            {/* <ul>{booksList}</ul> */}
                            <form
                                onSubmit={handleSubmit(this.submit.bind(this))}
                            >
                                {booksList}
                            </form>
                        </Panel.Body>
                    </Panel>
                    <button className="btn btn-primary btn-center">
                        + Add
                    </button>
                </Well>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
        form: state.form
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

BooksEditForm = connect(mapStateToProps, mapDispatchToProps)(BooksEditForm);

export default reduxForm({
    form: 'BooksEditForm' // a unique name for this form
})(BooksEditForm);
// export default connect(mapStateToProps, mapDispatchToProps)(BooksEditForm);
