import axios from "axios";

class APIService {
    constructor() {
        // this.token = null;
        // if (store.getters.getTempUser && store.getters.getTempUser.accessToken) {
        //     this.token = store.getters.getTempUser.accessToken
        // }
        this.axios = axios.create({
            baseURL: process.env.VUE_APP_API_URL
        });
        // this.axios.interceptors.request.use((config) => {
        //     if (this.token) {
        //         config.headers = {
        //             'Authorization': 'Bearer ' + this.token
        //         }
        //     }
        //     return config;
        // })
    }


    getPost() {
        return this.axios.get('api/post');
    }

}

export default new APIService();
