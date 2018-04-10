import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSingle, postSingle } from '../actions/actions-single';
import SingleForm from '../containers/forms/single-form';

class About extends Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getSingle();
    }

    constructor(props) {
        super(props);
    }

    renderList() {
        const listOfSingles = this.props.single.map(function(sing) {
            return <p key={sing._id}>{sing.firstName}</p>;
        }, this);

        return <div>{listOfSingles}</div>;
    }

    renderSingle() {
        const single = this.props.single;
        for (var i = 0; i < single.length; i++) {
            if (i == 0) {
                console.log(single[i].firstName);
                return single[i].firstName;
            }

            // if(single[i] == message.id) {
            //     index = i;
            //     break;
            // }
        }
        // var obj = this.props.single.find(function (obj) { return obj.id === 3; });
        // single[Object.keys(single)[0]];/
        // console.log('Rendersingle: ', single[0]._id);
        // return <p>{single[0]}</p>;
    }

    submit = values => {
        // print the form values to the console
        console.log(values);
        this.props.postSingle(values);
    };

    render() {
        console.log('State Single As Props: ', this.props.single);
        return (
            <footer className="footer text-center">
                <div>
                    <div className="content">
                        <div className="admin_container">
                            <Row>
                                <Col xs={12}>
                                    <SingleForm onSubmit={this.submit} />
                                </Col>
                            </Row>
                            <br />
                            {this.renderSingle()}
                            <hr />
                            {this.renderList()}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

function mapStateToProps(state) {
    return {
        single: state.single.single
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getSingle: getSingle,
            postSingle: postSingle
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
