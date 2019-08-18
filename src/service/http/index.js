import BaseHTTP from './base';

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
}

export default new HttpService();

