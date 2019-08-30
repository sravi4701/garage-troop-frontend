import BaseHTTP from './base';

const geoCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
const secretKey = 'AIzaSyBGwNJdEk2OID3NY1RzpxmK-ASrgc3O_eQ';

class HttpService extends BaseHTTP {
    async getGarageProfile(profileId) {
        try {
            const url = this.getFullPath(`/garages/${profileId}`);
            return await this.performFetch(url);
        } catch (error) {
            throw error;
        }
    }

    async getGaragesList(query) {
        try {
            const url = this.getFullPath(`/garages`, query);
            return await this.performFetch(url);
        } catch (error) {
            throw error;
        }
    }

    async getPincodeAddress(pincode) {
        try {
            const url = this.getFullPath('', {
                base_url: geoCodeUrl,
                address: pincode,
                key: secretKey
            });
            return await this.performFetch(url);
        } catch (error) {
            throw error;
        }
    }
}

export default new HttpService();

