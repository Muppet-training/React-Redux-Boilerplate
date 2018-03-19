import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import IncorporationForm from '../containers/incorporationForm';

class Shareholders extends Component {
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
                                    <IncorporationForm />
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
