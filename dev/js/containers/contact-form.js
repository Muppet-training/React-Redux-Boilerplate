import React from 'react';
import { reduxForm } from 'redux-form';
import validateContact from './validateContact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getBooks,
    deleteBooks,
    updateBooks,
    postBooks
} from '../actions/actions-books';

class ContactForm extends React.Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getBooks();
    }

    render() {
        const { fields: { name, address, phone }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" {...name} />
                {/* {name.error && name.touched && <div>{name.error}</div>} */}
                {/* {meta.error && meta.touched && <div>{meta.error}</div>} */}

                <label>Address</label>
                <input type="text" {...address} />
                {/* {address.error && address.touched && <div>{address.error}</div>} */}

                <label>Phone</label>
                <input type="text" {...phone} />
                {/* {phone.error && phone.touched && <div>{phone.error}</div>} */}

                <button onClick={handleSubmit}>Submit</button>
            </form>
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

ContactForm = connect(mapStateToProps, mapDispatchToProps)(ContactForm);

export default reduxForm(
    {
        form: 'contact', // the name of your form and the key to
        // where your form's state will be mounted
        fields: ['name', 'address', 'phone'], // a list of all your fields in your form
        validate: validateContact // a synchronous validation function
    },
    state => ({
        initialValues: {
            name: state.books.books[0].title,
            address: state.books.books[0].description,
            phone: state.books.books[0].price
        }
    })
)(ContactForm);

// export default ContactForm;
//
// export default reduxForm({
//     form: 'test-form',
//     destroyOnUnmount: false,
//     validate
// })(BooksEditForm)
