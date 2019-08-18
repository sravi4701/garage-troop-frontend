import React from 'react';
import './GarageList.css';

import Link from 'next/link';

class GarageItem extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="garage-list-item">
                <div className="garage-list-content">
                    <div className="row">
                        <div className="col-5">
                            <div className="garage-list-item-img">
                                <img src={data.avatar} alt="" />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="garage-list-profile-name">
                                {data.name}
                            </div>
                            <div className="garage-list-item-job">
                                {data.no_of_services} Jobs Completed
                            </div>
                            <div className="garage-list-item-since">
                                Since {data.established_since}
                            </div>
                        </div>
                    </div>
                    <div className="garage-list-item-intro">
                        {data.short_intro || 'One of the best garages in your location, view profile to know more'}
                    </div>
                    <div className="garage-list-item-address">
                        {data.address}
                    </div>
                    <div className="garage-list-item-view-profile">
                        <Link href={`/profile/${data._id}`}>
                            <a role="button" className="btn btn-outline-primary btn-block">View Profile</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

class GarageList extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="garage-list">
                {data.map(garage => {
                    return (
                        <div className="garage-list-item-wrapper">
                            <GarageItem data={garage} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default GarageList;
