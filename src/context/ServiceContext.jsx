import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const ServiceContext = React.createContext({});

export default class ServiceProvider extends Component {
    static propTypes = {
        children: PropTypes.any,
        service: PropTypes.any,
    };

    render() {
        return (
            <ServiceContext.Provider value={this.props.service} {...this.props}>
                {this.props.children}
            </ServiceContext.Provider>
        );
    }
}
