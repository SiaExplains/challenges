import axios from 'axios';

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
};

axios.interceptors.request.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500;
    if (!expectedError) {
        console.log('Error in calling service/api: ', error);
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    config: config
};
