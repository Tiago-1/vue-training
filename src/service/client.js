import axios from 'axios';
import Vue from 'vue';

let apiUrl = process.env.VUE_APP_API_URL;


var manageCallback = function(promise) {
    return new Promise((resolve, reject) => {
        promise
            .then(response => resolve(response.data))
            .catch(error => {
                reject(error.response ? error.response.data : error);
            });
    });
};

let client = {
    plain: {
        get: function(path, config) {
            return manageCallback(axios.get(path, config));
        },
        put: function(path, data, config) {
            return manageCallback(axios.put(path, data, config));
        },
        post: function(path, data, config) {
            return manageCallback(axios.post(path, data, config));
        },
        delete: function(path, data, config) {
            return manageCallback(axios.delete(path, data, config));
        },
        fileUpload: function(path, data, config) {
            config.cancelToken = config.cancelToken || axios.CancelToken.source().token;
            return manageCallback(
                axios.post(path, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    ...config
                })
            );
        }
    },
    get: function(path, config) {
        return client.plain.get(apiUrl + path, config);
    },
    put: function(path, data, config) {
        return client.plain.put(apiUrl + path, data, config);
    },
    post: function(path, data, config) {
        return client.plain.post(apiUrl + path, data, config);
    },
    delete: function(path, data, config) {
        return client.plain.delete(apiUrl + path, data, config);
    },
    fileUpload: function(path, data, config) {
        return client.plain.fileUpload(apiUrl + path, data, config);
    },
    secure: {
        get: function(path, config) {
            return client.get(path, addSecurity(config));
        },
        put: function(path, data, config) {
            return client.put(path, data, addSecurity(config));
        },
        post: function(path, data, config) {
            return client.post(path, data, addSecurity(config));
        },
        delete: function(path, data, config) {
            return client.delete(path, data, addSecurity(config));
        },
        fileUpload: function(path, data, config) {
            return client.fileUpload(path, data, addSecurity(config));
        }
    },
    utils: {
        get: function(path, config) {
            return manageCallback(axios.get(path), config);
        }

    }
};

export default client;
