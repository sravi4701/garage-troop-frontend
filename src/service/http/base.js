import queryString from 'query-string';
import fetch from 'isomorphic-unfetch';

const BASE_URL = 'http://localhost:5000';
class BaseHttp {
    /**
    {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
     */
    async performFetch(path, options = { method: 'GET' }) {
        try {
            console.log('fetching:::: ', path);
            const response = await fetch(path, options);
            if (response.status >= 400 && response.status < 600) {
                throw new Error('Bad response from server');
            }
            const result = await response.json();
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * get full path with base url + url string
     */
    getFullPath(path, query = {}) {
        const baseUrl = query.base_url || BASE_URL;
        delete query.base_url;
        let url = `${baseUrl}${path}`;
        if (query && Object.keys(query).length > 0) {
            url = `${url}?${queryString.stringify(query)}`;
        }
        return url;
    }
}

export default BaseHttp;
