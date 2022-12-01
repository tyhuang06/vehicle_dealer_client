import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
	Container,
	Card,
	CardBody,
	Image,
	Divider,
	CardFooter,
	Text,
	Stack,
	Heading,
} from '@chakra-ui/react';
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid';
import {
	SparklesIcon,
	TruckIcon,
	ClockIcon,
	HomeModernIcon,
	IdentificationIcon,
	DocumentTextIcon,
} from '@heroicons/react/24/outline';
import dateFormat from 'dateformat';
import VehicleService from '../../services/VehicleService';
import AppointmentService from '../../services/AppointmentService';
import EditAppointmentModal from '../../components/appointments/EditAppointmentModal';
import DeleteAppointmentModal from '../../components/appointments/DeleteAppointmentModal';

const SingleAppointmentPage = () => {
	const [appointment, setAppointment] = useState({});
	const [vehicle, setVehicle] = useState({});
	const { id } = useParams();

	useEffect(() => {
		AppointmentService.getSingleReservation(id)
			.then((res) => {
				setAppointment(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	useEffect(() => {
		VehicleService.getVehicleById(appointment.vin)
			.then((res) => {
				setVehicle(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [appointment.vin]);

	return (
		<Container className="my-8">
			<Link
				to="/appointments"
				className="flex items-center hover:underline w-fit rounded-md p-2"
			>
				<ArrowSmallLeftIcon className="w-8 h-8" />
				<div>All Appointments</div>
			</Link>

			<div className="mt-4 text-2xl">
				Appointment #{appointment.app_id}
			</div>

			<Card className="mt-2">
				<CardBody>
					<Image
						src={vehicle.image_path}
						alt="Photo of a car"
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">
							{vehicle.brand} {vehicle.model} {vehicle.year}
						</Heading>
						<Text>VIN: {vehicle.vin}</Text>

						{vehicle.new_or_used === 1 ? (
							<div className="flex items-center">
								<SparklesIcon className="w-4 h-4" />
								<div className="ml-1">Brand New</div>
							</div>
						) : (
							<div className="flex items-center">
								<TruckIcon className="w-4 h-4" />
								<div className="ml-1">
									Mileage: {vehicle.mileage}
								</div>
							</div>
						)}
						<div className="flex items-center">
							<HomeModernIcon className="w-4 h-4" />
							<div className="ml-1">
								Dealer: {vehicle.dealer_id} get name
							</div>
						</div>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter className="flex flex-col">
					<div className="flex items-center">
						<IdentificationIcon className="w-4 h-4" />
						<div className="ml-1">{appointment.app_type}</div>
					</div>
					<div className="flex items-center">
						<ClockIcon className="w-4 h-4" />
						<div className="ml-1">
							Appointment Date:{' '}
							{dateFormat(appointment.app_date, 'mm/dd/yyyy')}
						</div>
					</div>
					<div className="flex items-center">
						<DocumentTextIcon className="w-4 h-4" />
						<div className="ml-1">
							Notes: {appointment.other_info}
						</div>
					</div>

					<div className="flex justify-end items-center">
						<EditAppointmentModal appointment={appointment} />
						<DeleteAppointmentModal appointment={appointment} />
					</div>
				</CardFooter>
			</Card>
		</Container>
	);
};

export default SingleAppointmentPage;
