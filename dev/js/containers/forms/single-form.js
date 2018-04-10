import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SingleForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field
                    name="firstName"
                    component="input"
                    value="tom"
                    type="text"
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

const InputText = ({ input, label, meta: { touched, error } }) => (
    <div>
        <label htmlFor={input.name}>{label}</label>
        <input {...input} type="text" />
        {touched && error && <span className="error">{error}</span>}
    </div>
);

SingleForm = reduxForm({
    // a unique name for the form
    form: 'contact',
    enableReinitialize: true, // this is needed!!
    initialValues: {
        firstName: 'Tom'
    }
})(SingleForm);

// // You have to connect() to any reducers that you wish to connect to yourself
// InitializeFromStateForm = connect(
//   state => ({
//     initialValues: state.account.data // pull initial values from account reducer
//   }),
//   { load: loadAccount } // bind account loading action creator
// )(InitializeFromStateForm)

export default SingleForm;
