import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>
                <h2>Desde React!</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('App'))