import React from 'react';

import TopHeader from '../src/components/Header';
import SearchPage from '../src/components/SearchPage';

import GarageService from '../src/service/http';

export default class Index extends React.Component {
    static async getInitialProps({ req, res, query }) {
        // fetch initial data
        const address = query.address;
        delete query.address;
        try {
            const { data: garages, meta: garageListMeta } = await GarageService.getGaragesList(query);
            return {
                garages,
                garageListMeta,
                query,
                address
            };
        } catch (error) {
            return { garages: [], garageListMeta: {}, query: {}, address: '' };
        }
    }

    render() {
        return (
            <div className="main-page">
                <TopHeader />
                <SearchPage garages={this.props.garages} garageListMeta={this.props.garageListMeta} query={this.props.query} address={this.props.address} />
            </div>
        );
    }
}
