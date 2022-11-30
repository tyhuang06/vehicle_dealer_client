import axios from 'axios';

const axiosDefault = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true,
});

const config = {
	headers: {
		'Content-type': 'application/json',
	},
};

export { config, axiosDefault };
