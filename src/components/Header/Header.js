import React from 'react';

import './Header.css';
import Link from 'next/link';

export default class TopHeader extends React.Component {
    render() {
        return (
            <div className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-8 d-flex align-items-center">
                            <div className="logo-content-wrapper d-flex align-items-center">
                                <Link href="/">
                                    <a><img src="/static/icons/logo-1.png" /></a>
                                </Link>
                                <h1>Garage Troop</h1>
                            </div>
                        </div>
                        <div className="col">
                            <div className="nav" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
