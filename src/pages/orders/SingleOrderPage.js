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
	SwatchIcon,
	UsersIcon,
	HomeModernIcon,
	IdentificationIcon,
} from '@heroicons/react/24/outline';
import dateFormat from 'dateformat';
import OrderService from '../../services/OrderService';
import VehicleService from '../../services/VehicleService';
import EditOrderModal from '../../components/orders/EditOrderModal';
import DeleteOrderModal from '../../components/orders/DeleteOrderModal';

const SingleOrderPage = () => {
	const [order, setOrder] = useState({});
	const [vehicle, setVehicle] = useState({});
	const { id } = useParams();

	useEffect(() => {
		OrderService.getSingleOrder(id)
			.then((res) => {
				setOrder(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	useEffect(() => {
		VehicleService.getVehicleById(order.vin)
			.then((res) => {
				setVehicle(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [order.vin]);

	return (
		<Container className="my-8">
			<Link
				to="/orders"
				className="flex items-center hover:underline w-fit rounded-md p-2"
			>
				<ArrowSmallLeftIcon className="w-8 h-8" />
				<div>All Orders</div>
			</Link>

			<div className="mt-4 text-2xl">Order #{order.order_id}</div>

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
							<SwatchIcon className="w-4 h-4" />
							<div className="ml-1">Color: {vehicle.color}</div>
						</div>
						<div className="flex items-center">
							<UsersIcon className="w-4 h-4" />
							<div className="ml-1">
								Seats: {vehicle.num_of_seats}
							</div>
						</div>
						<div className="flex items-center">
							<HomeModernIcon className="w-4 h-4" />
							<div className="ml-1">
								Dealer: {vehicle.dealer_id} get name
							</div>
						</div>
						<Text color="teal.600" fontSize="2xl">
							$ {vehicle.price}
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter className="flex flex-col">
					<div>
						Order Date: {dateFormat(order.order_date, 'mm/dd/yyyy')}
					</div>
					<div>Notes: {order.notes}</div>
					<div className="flex items-center">
						<IdentificationIcon className="w-4 h-4" />
						<div className="ml-1">
							Salesperson: {order.salesperson_id} get name
						</div>
					</div>
					<div className="flex justify-end items-center">
						<EditOrderModal order={order} />
						<DeleteOrderModal order={order} />
					</div>
				</CardFooter>
			</Card>
		</Container>
	);
};

export default SingleOrderPage;
