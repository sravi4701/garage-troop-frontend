import React from 'react';

import TopHeader from '../src/components/Header';
import ProfilePage from '../src/components/ProfilePage';
import HttpService from '../src/service/http';

export default class Index extends React.Component {
    static async getInitialProps({ req, res, query }) {
        const id = query.id;
        try {
            const garageData = await HttpService.getGarageProfile(id);
            return {
                garageData: garageData.data
            };
        } catch (error) {
            console.log('error', error);
            return { garageData: {} };
        }
    }

    render() {
        const garageData = this.props.garageData || {};
        return (
            <div>
                <TopHeader />
                <ProfilePage data={garageData} />
            </div>
        );
    }
}
