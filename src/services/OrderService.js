import axiosDefault from '../axios';

const config = {
	headers: {
		'Content-type': 'application/json',
	},
};

const createOrder = async (obj) => {
	const { data } = await axiosDefault.post('/order', obj, config);
	return data;
};

const getAllOrders = async () => {
	const { data } = await axiosDefault.get('/order');
	return data;
};

const getSingleOrder = async (id) => {
	const { data } = await axiosDefault.get(`/order/${id}`);
	return data;
};

const updateOrder = async (id, obj) => {
	const { data } = await axiosDefault.put(`/order/${id}`, obj, config);
	return data;
};

const deleteOrder = async (id) => {
	const { data } = await axiosDefault.delete(`/order/${id}`);
	return data;
};

const OrderService = {
	createOrder,
	getAllOrders,
	getSingleOrder,
	updateOrder,
	deleteOrder,
};

export default OrderService;
