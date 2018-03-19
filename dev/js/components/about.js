import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import IncorporationForm from '../containers/incorporationForm';

class About extends Component {
    render() {
        return (
            <footer className="footer text-center">
                <div>
                    <div className="content">
                        <div className="admin_container">
                            <Row>
                                <Col xs={12}>
                                    <IncorporationForm />
                                </Col>
                            </Row>
                            <p>This is the about section..</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default About;
