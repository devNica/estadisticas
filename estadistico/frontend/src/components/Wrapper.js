import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Content from './Content'

class Wrapper extends Component {
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <Content />
            </div>
        );
    }
}

export default Wrapper;