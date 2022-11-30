import { config, axiosDefault } from '../axios';

const login = async (obj) => {
	const { data } = await axiosDefault.post('/auth/login', obj, config);
	return data;
};

const register = async (obj) => {
	const { data } = await axiosDefault.post('/auth/register', obj, config);
	return data;
};

const logout = async () => {
	const { data } = await axiosDefault.post('/auth/logout');
	return data;
};

const AuthService = {
	login,
	register,
	logout,
};

export default AuthService;
