import React, { Component, Fragment } from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Portfolio from './Portfolio'
import About from './About'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Header />
                <Portfolio />
                <About />
                <Footer />
            </Fragment>

        );
    }
}

export default App;