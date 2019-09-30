import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import store from './store'
import App from '../components/App'
import { Provider } from 'react-redux'

class Base extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(<Base />, document.getElementById('App'))