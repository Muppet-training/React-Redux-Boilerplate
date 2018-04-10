import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

import {
    getBooks,
    deleteBooks,
    updateBooks,
    postBooks
} from '../actions/actions-books';

async function submitToServer(data) {
    try {
        let response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

class ContactForm extends Component {
    // const shareholders = this.props.shareholders.map(function(shareholder) {
    //     return <p>{shareholder.shareholders}</p>;
    // });

    componentDidMount() {
        // Dispatch an action
        this.props.getBooks();
    }

    submit = ({ firstName = '', lastName = '', email = '' }) => {
        let error = {};
        let isError = false;

        if (firstName.trim() === lastName.trim()) {
            error.lastName = 'Names cannot match';
            isError = true;
        }
        // console.log('Submit from form: ', values);
        if (firstName.trim() === '') {
            error.firstName = 'Required';
            isError = true;
        }

        if (lastName.trim() === '') {
            error.lastName = 'Required';
            isError = true;
        }

        if (email.trim() === '') {
            error.email = 'Required';
            isError = true;
        }

        if (isError) {
            console.log('Error', error);
            throw new SubmissionError(error);
        } else {
            //Submit form to server
            console.log('Submitted');
            return submitToServer({ firstName, lastName, email }).then(data => {
                if (data.errors) {
                    throw new SubmissionError(data.errors);
                } else {
                    console.log('Server added data to database');
                }
            });
        }
    };

    submitTitle = () => {
        console.log('Submitted......');
    };

    // const { handleSubmit } = props;
    render() {
        const renderField = ({
            type,
            label,
            input,
            pristine,
            value,
            meta: { touched, error }
        }) => (
            <div className="input-row">
                <label>{label}</label>
                <br />
                {/* This connects the input element with the redux store */}
                <input {...input} type={type} />
                {touched && error && <span className="error">{error}</span>}
            </div>
        );

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
                    <Field
                        name="firstName"
                        component={renderField}
                        type="text"
                        label="First Name"
                        value={bookToEdit.title}
                        onChange={this.submitTitle.bind(this)}
                    />
                    {/* <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Title"
                            // ref="title"
                            // id={index}
                        />
                    </FormGroup> */}
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Description"
                            value={bookToEdit.description}
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

        return (
            // Getting the handle submit function from the redux form
            <div>
                {booksEditList}
                <form onSubmit={this.props.handleSubmit(this.submit)}>
                    <Row>
                        <Col xs={12} sm={3}>
                            <Field
                                name="firstName"
                                component={renderField}
                                type="text"
                                label="First Name"
                                placeholder="First"
                            />
                        </Col>
                        <Col xs={12} sm={3}>
                            <Field
                                name="lastName"
                                component={renderField}
                                type="text"
                                label="Last Name"
                            />
                        </Col>
                        <Col xs={12} sm={3}>
                            <Field
                                name="email"
                                component={renderField}
                                type="text"
                                label="Email"
                            />
                        </Col>
                        <Col xs={12} sm={3}>
                            <button type="submit">Submit</button>
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}

// let ContactForm = props => {
//     const { handleSubmit } = props;
//     return <form onSubmit={handleSubmit}>{/* form body*/}</form>;
// };

// Decorate the form component
// ContactForm = reduxForm({
//     // a unique name for the form
//     // form: 'contact'
//     form: 'initializeFromState',
//     enableReinitialize: true // this is needed!!
// })(ContactForm);

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ContactForm = reduxForm({
    form: 'initializeFromState', // a unique identifier for this form
    enableReinitialize: true // this is needed!!
})(ContactForm);

// You have to connect() to any reducers that you wish to connect to yourself
// ContactForm = connect(state => ({
//     initialValues: state.books.books // pull initial values from account reducer
// }))(ContactForm);

// export default ContactForm;

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

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
