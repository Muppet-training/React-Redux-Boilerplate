import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SingleForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

SingleForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(SingleForm);

export default SingleForm;
