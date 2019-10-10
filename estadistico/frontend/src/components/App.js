import React, { Component, Fragment } from 'react';
import { HashRouter as Router, BrowserRouter } from 'react-router-dom'
import Scroll from './Scroll';
import Wrapper from './Wrapper';
import Modal from './Modal'

class App extends Component {



    render() {
        return (
            <Fragment>

                <Router>
                    <Wrapper />

                </Router>
                <Scroll />
                <Modal />
            </Fragment>



        );
    }
}

export default App;