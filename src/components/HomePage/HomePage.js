import React from 'react';
import GarageList from '../GarageList';

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-page__content">
                    <div className="container">
                        <GarageList data={this.props.garages} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
