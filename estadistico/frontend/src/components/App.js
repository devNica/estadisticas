import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                </Provider>
            </Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('App'))