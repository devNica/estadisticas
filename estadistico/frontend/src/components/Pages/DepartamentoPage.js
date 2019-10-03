import React, { Component } from 'react';

class ChinandegaPage extends Component {

    componentDidMount() {
        const { match: { params } } = this.props
        console.log(params.id);
    }

    render() {
        return (
            <div>
                <h2>desde departamento</h2>
            </div>
        );
    }
}

export default ChinandegaPage;