import { axiosDefault } from '../axios';

const getAllVehicles = async() => {
	const {data} = await axiosDefault.get('/vehicle');
	return data;
}

const getVehicleById = async (id) => {
	const { data } = await axiosDefault.get(`/vehicle/id/${id}`);
	return data;
};

const getVehicleByType = async (type) => {
	const { data } = await axiosDefault.get(`/vehicle/${type}`);
	return data;
}

const getVehicleByBrand = async (brand) => {
	const { data } = await axiosDefault.get(`/vehicle/brand/${brand}`);
	return data;
}

const getElectricVehicle = async () => {
	const {data} = await axiosDefault.get('/vehicle/electric');
	return data;
}

const getNewVehicle = async() => {
	const {data} = await axiosDefault.get('/vehicle/newVehicle');
	return data;
}

const getUsedVehicle = async() => {
	const {data} = await axiosDefault.get('/vehicle/usedVehicle');
	return data;
}

const getVehicleAfterYear = async() => {
	const {data} = await axiosDefault.get('/vehicle/year');
	return data;
}

const getVehicleByColor = async() => {
	const {data} = await axiosDefault.get('/vehicle/color');
	return data;
}

const getVehicleByPrice = async() => {
	const {data} = await axiosDefault.get('/vehicle/price');
	return data;
}


// TODO: Add the rest of the vehicle operations

const VehicleService = {
	getAllVehicles,
	getVehicleByType,
	getVehicleByBrand,
	getVehicleById,
	getElectricVehicle,
	getNewVehicle,
	getUsedVehicle,
	getVehicleAfterYear,
	getVehicleByColor,
	getVehicleByPrice,
};

export default VehicleService;
