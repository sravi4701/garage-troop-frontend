import React from 'react';
import GarageList from '../GarageList';
import GarageService from '../../service/http';
import _ from 'lodash';

import { SearchBox } from '../Header';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            loading: false,
            query: this.props.query,
            garages: this.props.garages,
            garagesListMeta: this.props.garagesListMeta
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    async handleSearch(query) {
        this.setState({ query });
        const { data: garages, meta: garagesMeta } = await GarageService.getGaragesList(query);
        this.setState({ garages, garagesListMeta: garagesMeta });
    }

    async handleLoadMoreData() {
        try {
            const query = this.state.query || {};
            const offset = _.get(this.state, 'garagesListMeta.skip');
            query.offset = offset;
            this.setState({ loading: true });
            const { data: garages, meta: garagesMeta } = await GarageService.getGaragesList(query);
            this.setState(currentState => {
                const currentGarages = currentState.garages;
                const newGarages = currentGarages.concat(garages);
                return {
                    garages: newGarages,
                    garagesListMeta: garagesMeta,
                    loading: false
                };
            });
        } catch (error) {
            console.log('error is', error);
        }
    }

    render() {
        return (
            <div className="home-page">
                <div className="home-page__content">
                    <div className="container">
                        <div className="search-header__homepage">
                            <SearchBox handleSearch={this.handleSearch} address={this.props.address} />
                        </div>
                        <GarageList data={this.state.garages} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;
