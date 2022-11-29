import axios from 'axios';

const axiosDefault = axios.create({
	baseURL: process.env.API_URL,
	withCredentials: true,
});

export default axiosDefault;
