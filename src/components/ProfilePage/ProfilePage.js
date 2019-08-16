import React from 'react';
import Slider from 'react-slick';
import Utils from '../../../utils';

import './ProfilePage.css';

const weekDays = Utils.getWeekDays();

class ImageCarausal extends React.Component {
    render() {
        const urls = this.props.data;
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            arrows: true,
            slidesToScroll: 1
        };
        return (
            <div className="slick-item-wrapper">
                <Slider {...settings}>
                    {urls.map(url => {
                        return (
                            <div className="slick-item">
                                <img src={url} alt="" />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

class MechanicList extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="mechanics-list">
                {data && data.map(mechanic => {
                    return (
                        <div className="mechanic-detail">
                            <div className="mechanic-avatar">
                                <img src={mechanic.avatar} alt="" />
                            </div>
                            <div className="mechanic-name">{mechanic.name}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}



class MediaDemo extends React.Component {
    render() {
        const media = this.props.data;
        const isYoutubeUrl = media.source.includes('youtube.com/watch');
        let videoTag;
        if (isYoutubeUrl) {
            videoTag = (
                <iframe src={media.source} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
            );
        } else {
            videoTag = (
                <video controls poster={media.thumbnail}>
                    <source src={media.source} />
                </video>
            );
        }
        return (
            <div className="profile-video">
                {videoTag}
            </div>
        );
    }
}


export default class GarageProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        const aboutUs = this.props.data.about_us;
        const experties = this.props.data.experties;
        const openingTime = this.props.data.opening_time;
        const services = this.props.data.services;
        const media = this.props.data.media;
        console.log('opening', openingTime);
        console.log('weekdays', weekDays);
        const openingTimeJSX = weekDays.map(day => {
            return (
                <tr>
                    <td>{day}</td>
                    <td>{openingTime[day]}</td>
                </tr>
            );
        });

        return (
            <div className="profile-page">
                <div className="profile-content">
                    <div className="profile-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <div className="profile-img">
                                        <img src={data.avatar} alt="something" />
                                    </div>
                                    <div className="profile-category">
                                        {data.category}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="profile-name">
                                        <h1>{data.name}</h1>
                                    </div>
                                    <div className="booking-done">
                                        Services Provided {data.no_of_services}
                                    </div>
                                    <div className="profile-address">
                                        {data.address}
                                    </div>
                                    <div className="established-since">
                                        Established {data.established_since || 1992}
                                    </div>
                                </div>

                                <div className="col-4">
                                    <h2>
                                        Want to Get quotes from this workshop?
                                    </h2>
                                    <div className="get-quote-btn">
                                        <button type="submit">Let Us Know</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="profile-about-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <div className="section-header">About Us</div>
                                    <div className="about-us-main">
                                        {aboutUs.p1 &&
                                            <p>{aboutUs.p1}</p>
                                        }
                                        {aboutUs.p2 &&
                                            <p>{aboutUs.p2}</p>
                                        }
                                        {aboutUs.p3 &&
                                            <p>{aboutUs.p3}</p>
                                        }
                                    </div>
                                    <div className="portfolio-section">
                                        <ImageCarausal data={data.portfolio} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="section-header">Badges</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-experties-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <div className="section-header">
                                        Experties
                                    </div>
                                    <ul className="profile-experties-list">
                                        {experties &&
                                            experties.map(experty => {
                                                return <li className="profile-experties-item">{experty}</li>;
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <div className="section-header">
                                        Opening Time
                                    </div>
                                    <div className="profile-opening-time">
                                        <table className="table table-borderless">
                                            <tbody>
                                                {openingTimeJSX}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mechanic-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <div className="section-header">Mechanics Enrolled</div>
                                    <div className="mechanics-list-wrapper">
                                        <MechanicList data={this.props.data.mechanics} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="section-header">Services Offered</div>
                                    <ul>
                                        {services &&
                                            services.map(service => {
                                                return <li>{service}</li>;
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="garage-video-section">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <MediaDemo data={media} />
                                </div>
                                <div className="col">
                                    Map section
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
