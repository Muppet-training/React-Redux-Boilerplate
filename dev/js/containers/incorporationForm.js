import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    getShareholders,
    removeShareholder
} from '../actions/actions-shareholders';

class IncorporationForm extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     name: '',
        //     shareholders: [{ name: '' }]
        // };
    }

    componentDidMount() {
        // Dispatch an action
        this.props.getShareholders();
    }

    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleShareholderNameChange = idx => evt => {
        const newShareholders = this.state.shareholders.map(
            (shareholder, sidx) => {
                if (idx !== sidx) return shareholder;
                return { ...shareholder, name: evt.target.value };
            }
        );

        this.setState({ shareholders: newShareholders });
    };

    handleSubmit = evt => {
        const { name, shareholders } = this.props;
        alert(
            `Incorporated: ${this.props.name} with ${
                shareholders.length
            } shareholders`
        );
    };

    handleAddShareholder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{ name: '' }])
        });
    };

    handleRemoveShareholder = idx => () => {
        const shareholderState = this.props.shareholders;

        const itemToDelete = this.props.shareholders.filter(
            (s, sidx) => idx === sidx
        );

        const shareholderID = itemToDelete[0]._id;
        // console.log('itemToDelete: ', itemToDelete[0]._id);

        this.props.removeShareholder(shareholderID);

        // this.setState({
        //     shareholders: this.props.shareholders.filter(
        //         (s, sidx) => idx !== sidx
        //     )
        // });
    };

    render() {
        console.log('State Shareholders As Props: ', this.props.shareholders);

        const fromProps = this.props.shareholders.map((shareholder, idx) => (
            <div className="shareholder" key={idx}>
                <input
                    type="text"
                    placeholder={`Shareholder #${idx + 1} name`}
                    value={shareholder.shareholders}
                    onChange={this.handleShareholderNameChange(idx)}
                />
                <button
                    type="button"
                    onClick={this.handleRemoveShareholder(idx)}
                    className="small"
                >
                    -
                </button>
            </div>
        ));

        const shareholders = this.props.shareholders.map(function(shareholder) {
            return <p>{shareholder.shareholders}</p>;
        });
        return (
            <div className="content">
                <div className="admin_container">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Company name, e.g. Magic Everywhere LLC"
                            onChange={this.handleNameChange}
                        />

                        <h4>Shareholders</h4>

                        {fromProps}
                        <button
                            type="button"
                            onClick={this.handleAddShareholder}
                            className="small"
                        >
                            Add Shareholder
                        </button>
                        <button>Incorporate</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shareholders: state.shareholders.shareholders
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getShareholders: getShareholders,
            removeShareholder: removeShareholder
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(IncorporationForm);
