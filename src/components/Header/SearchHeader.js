import React from 'react';

import Router from 'next/router';
import GarageService from '../../service/http';

import './SearchHeader.css';


export class SearchContainer extends React.Component {
    render() {
        const handlePincodeChange = this.props.handlePincodeChange;
        const handleNearMeClick = this.props.handleNearMeClick;
        const handleSubmit = this.props.handleSubmit;
        const pincode = this.props.pincode || '';
        return (
            <div className="searchbox-widget">
                <div className="searchbox-items">
                    <div className="searchbox-input">
                        <div className="searchbox-input-wrapper">
                            <input className="pincode-input" value={pincode} onChange={handlePincodeChange} type="text" name="pincode" placeholder="Enter Your Area Pincode eg 211004" />
                            <div className="search-box-near-by-section">
                                <div className="searchbox-near-me" onClick={handleNearMeClick}>
                                    Near Me
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="searchbox-submit">
                        <button type="submit" className="search-box-btn" onClick={handleSubmit}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pincode: this.props.address || '',
            lat: '',
            lng: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNearMeClick = this.handleNearMeClick.bind(this);
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    parseGeoCodeData(data) {

    }

    async handleSubmit(event) {
        event.preventDefault();
        const pincode = this.state.pincode;
        if (!pincode) {
            return this.setState({ pincode: '' });
        }
        try {
            const data = await GarageService.getPincodeAddress(pincode);
            const { lat, lng, error } = this.parseGeoCodeData(data);
            if (error) {
                return console.log('error parsing data', error);
            }
            return this.props.handleSearch({ lat, lng });
        } catch (error) {
            console.log('error', error);
        }
    }

    handleNearMeClick(event) {
        // event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lng = position.coords.longitude;
                const lat = position.coords.latitude;
                console.log(`longitude: ${lng} | latitude: ${lat}`);
                this.setState({ lat, lng }, () => {
                    this.props.handleSearch({ lat: this.state.lat, lng: this.state.lng });
                });
            }, error => {
                console.log('error', error);
            }, { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 });
        } else {
            console.log('no geolocation');
        }
    }

    render() {
        return (
            <div>
                <SearchContainer handlePincodeChange={this.handleOnChange} handleNearMeClick={this.handleNearMeClick} handleSubmit={this.handleSubmit} pincode={this.state.pincode} />
            </div>
        );
    }
}

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(query) {
        Router.push({ pathname: '/search', query: { lat: query.lat, lng: query.lng } });
    }

    render() {
        return (
            <div className="search-header-section">
                <div className="search-header-wrapper">
                    <div className="search-header-tagline">
                        <h1>Find the best Garages Near Your Area One of the best</h1>
                    </div>
                    <div className="search-box-wrapper">
                        <SearchBox handleSearch={this.handleSearch} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchHeader;
