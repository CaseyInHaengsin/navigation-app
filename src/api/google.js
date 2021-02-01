import axios from 'axios';
import { TOKEN } from "@env";

const instance = axios.create({
    baseURL: ``
})

instance.interceptors.request.use(
    async (config) => {
        const baseURL = `https://maps.googleapis.com/maps/api/directions/json?${config.origin}&destination=${config.destination}&key=${TOKEN}`
        config.baseURL = baseURL;
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;