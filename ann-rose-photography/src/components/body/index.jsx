import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Home from './home';

class Body extends Component {
    render() {
        return (
            <Container>
                <Home/>
            </Container>
        );
    }
}


export default Body;