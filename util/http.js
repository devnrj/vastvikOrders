import axios from 'axios';

const baseUrl = 'https://project1x-906f3-default-rtdb.asia-southeast1.firebasedatabase.app/';

const http = {
    post: async (url, data) => {
        url = baseUrl + url;
        axios.post(url, data);
    },
    get: async (url, config) => {
        url = baseUrl + url;
        const data = axios.get(url);
        return data;
    }
}

module.exports = http;