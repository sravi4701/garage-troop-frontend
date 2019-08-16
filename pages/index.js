import React from 'react';

import TopHeader from '../src/components/Header';
import HomePage from '../src/components/HomePage';

export default class Index extends React.Component {
    static getInitialProps({ req, res, query }) {
        // fetch initial data
    }

    render() {
        return (
            <div>
                <TopHeader />
                <HomePage />
            </div>
        );
    }
}
