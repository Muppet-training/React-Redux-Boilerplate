import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import UserForm from '../containers/user-form';

import BooksList from '../containers/books-list';

require('../../scss/style.scss');

const App = () => (
    <div>
        <div className="content">
            <div className="user_container">
                <Row>
                    <Col xs={12} sm={6}>
                        <UserList />
                    </Col>
                    <Col xs={12} sm={6}>
                        <UserForm />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12}>
                        <UserDetails />
                    </Col>
                </Row>
            </div>
            <hr />
            <Row>
                <Col xs={12}>
                    <BooksList />
                </Col>
            </Row>
        </div>
    </div>
);

export default App;
