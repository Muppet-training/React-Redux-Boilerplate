import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { getSingle } from '../../actions/actions-single';

class SingleForm extends Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getSingle();
    }

    handleSubmit(value) {
        console.log('value->', value);
    }

    renderList() {
        const listOfSingles = this.props.single.map(function(sing) {
            return <p key={sing._id}>{sing.name}</p>;
        });

        return <div>{listOfSingles}</div>;
    }

    render() {
        console.log('State Single As Props: ', this.props.single);

        return (
            <div className="content">
                <div className="admin_container">
                    <h4>Single Form</h4>
                    <form onSubmit={this.props.handleSubmit()}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            // onChange={this.handleNameChange}
                        />
                        <button
                            type="button"
                            onClick={this.handleSubmit}
                            className="small"
                        >
                            Submit Form
                        </button>
                    </form>
                    <br />
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

SingleForm = reduxForm({
    form: 'single' // a unique identifier for this form
    // validate,
})(SingleForm);

// SingleForm = reduxForm({
//     form: 'initializeFromState', // a unique identifier for this form
//     enableReinitialize: true // this is needed!!
// })(SingleForm);

function mapStateToProps(state) {
    return {
        single: state.single.single
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getSingle: getSingle
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleForm);
