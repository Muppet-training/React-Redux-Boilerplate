import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

// import IncorporationForm from '../containers/incorporationForm';
import ContactForm from '../containers/test-form-edit';
import BooksEditForm from '../containers/books-edit-form-edit';

class Shareholders extends Component {
    // submit = values => {
    //     console.log('Value: ', values);
    // };

    render() {
        return (
            <footer className="footer text-center">
                <div>
                    <div className="content">
                        <div className="admin_container">
                            <Row>
                                <Col xs={12}>
                                    <p>Where I want the form to display</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <ContactForm onSubmit={this.submit} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <BooksEditForm />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Shareholders;
