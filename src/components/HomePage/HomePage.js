import React from 'react';
import GarageList from '../GarageList';
import { SearchHeader } from '../Header';

import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-page__content">
                    <div className="container">
                        <div className="search-header__homepage">
                            <SearchHeader />
                        </div>
                        <GarageList data={this.props.garages} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
