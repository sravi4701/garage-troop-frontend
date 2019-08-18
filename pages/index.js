import React from 'react';

import TopHeader from '../src/components/Header';
import HomePage from '../src/components/HomePage';

import GarageService from '../src/service/http';

export default class Index extends React.Component {
    static async getInitialProps({ req, res, query }) {
        // fetch initial data
        try {
            const { data: garages, meta: garageListMeta } = await GarageService.getGaragesList();
            return {
                garages,
                garageListMeta
            };
        } catch (error) {
            return { garages: [], garageListMeta: {} };
        }
    }

    render() {
        return (
            <div className="main-page">
                <TopHeader />
                <HomePage garages={this.props.garages} garageListMeta={this.props.garageListMeta} />
            </div>
        );
    }
}
