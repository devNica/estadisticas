import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import Scroll from './Scroll';
import Wrapper from './Wrapper';
import Modal from './Modal'

class App extends Component {



    render() {
        return (
            <Router>
                <Wrapper />
                <Scroll />
                <Modal />
            </Router>
        );
    }
}

export default App;