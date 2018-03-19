import React from 'react';
import { Row, Col } from 'react-bootstrap';

import UserForm from '../containers/user-form';
import BooksForm from '../containers/books-form';
import BooksEditForm from '../containers/books-edit-form';
import Shareholders from '../components/shareholders';

require('../../scss/style.scss');

const AdminForm = () => (
    <div>
        <div className="content">
            <div className="admin_container">
                <Row>
                    <Col xs={12} sm={6}>
                        <BooksForm />
                    </Col>
                    <Col xs={12} sm={6}>
                        <UserForm />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <BooksEditForm />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Shareholders />
                    </Col>
                </Row>
            </div>
        </div>
    </div>
);

export default AdminForm;
