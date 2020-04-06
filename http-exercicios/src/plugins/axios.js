import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;

        Vue.prototype.$http.interceptors.request.use(req => {
            console.log('req >>> ', req);
            return req;
        });

        Vue.prototype.$http.interceptors.response.use(res => {
            console.log('res >>> ', res);
            return res;
        });
    }
});
