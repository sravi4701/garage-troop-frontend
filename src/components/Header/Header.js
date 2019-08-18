import React from 'react';

import './Header.css';

export default class TopHeader extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="main-header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Garage Troop</h1>
                            </div>
                            <div className="col">
                                <div className="nav"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
