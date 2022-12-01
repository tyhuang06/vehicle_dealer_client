import { config, axiosDefault } from '../axios';

const getAllReservations = async () => {
	const { data } = await axiosDefault.get('/reservation');
	return data;
};

const getSingleReservation = async (id) => {
	const { data } = await axiosDefault.get(`/reservation/${id}`);
	return data;
};

const createReservation = async (obj) => {
	const { data } = await axiosDefault.post('/reservation', obj, config);
	return data;
};

const updateReservation = async (id, obj) => {
	const { data } = await axiosDefault.put(`/reservation/${id}`, obj, config);
	return data;
};

const deleteReservation = async (id) => {
	const { data } = await axiosDefault.delete(`/reservation/${id}`);
	return data;
};

const ReservationService = {
	getAllReservations,
	getSingleReservation,
	createReservation,
	updateReservation,
	deleteReservation,
};

export default ReservationService;
