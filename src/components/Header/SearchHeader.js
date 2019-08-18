import React from 'react';

import './SearchHeader.css';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pincode: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNearMeClick = this.handleNearMeClick.bind(this);
    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const pincode = this.state.pincode;
        if (!pincode) {
            return this.setState({pincode: ''});
        }
    }

    handleNearMeClick(event) {
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( (position) => {
                const lng = position.coords.longitude;
                const lat = position.coords.latitude;
              
                console.log(`longitude: ${ lng } | latitude: ${ lat }`);
                this.setState({lat, lng});
            }, (error) => {
                console.log('error', error);
            });
        }
    }

    render() {
        return (
            <div className="searchbox-widget">
                <div className="searchbox-items">
                    <div className="searchbox-input">
                        <div className="searchbox-input-wrapper">
                            <input className="pincode-input" onChange={this.handleOnChange} type="text" name="pincode" placeholder="Enter Your Area Pincode eg 211004" />
                            <div className="search-box-near-by-section">
                                <div className="searchbox-near-me" onClick={this.handleNearMeClick}>
                                    Near Me
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="searchbox-submit">
                        <button type="submit" className="search-box-btn" onClick={this.handleSubmit}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

class SearchHeader extends React.Component {
    render() {
        return (
            <div className="search-header-section">
                <div className="search-header-wrapper">
                    <div className="search-header-tagline">
                        <h1>Find the best Garages Near Your Area One of the bes</h1>
                    </div>
                    <div className="search-box-wrapper">
                        <SearchBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchHeader;
