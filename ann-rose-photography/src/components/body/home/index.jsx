import React, { Component } from 'react';
import About from './about';
import Gallery from './gallery';
import Welcome from './welcome';


class Home extends Component {
    render() {
        return (
            <>
                <Gallery />

                <br />

                <Welcome />

                <br />

                <About />

            </>
        );
    }
}

export default Home;