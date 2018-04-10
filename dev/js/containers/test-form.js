import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

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

    // const { handleSubmit } = props;
    render() {
        const renderField = ({
            type,
            label,
            input,
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

        return (
            // Getting the handle submit function from the redux form
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <Field
                    name="firstName"
                    component={renderField}
                    type="text"
                    label="First Name"
                />
                <Field
                    name="lastName"
                    component={renderField}
                    type="text"
                    label="Last Name"
                />
                <Field
                    name="email"
                    component={renderField}
                    type="text"
                    label="Email"
                />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

// let ContactForm = props => {
//     const { handleSubmit } = props;
//     return <form onSubmit={handleSubmit}>{/* form body*/}</form>;
// };

// Decorate the form component
ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm);

export default ContactForm;
