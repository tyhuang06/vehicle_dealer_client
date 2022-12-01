import { axiosDefault } from '../axios';

const getVehicleById = async (id) => {
	const { data } = await axiosDefault.get(`/vehicle/${id}`);
	return data;
};

// TODO: Add the rest of the vehicle operations

const VehicleService = {
	getVehicleById,
};

export default VehicleService;
