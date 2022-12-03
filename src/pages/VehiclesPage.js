import React, { useEffect, useState } from 'react';
import VehicleService from '../services/VehicleService';
import vehicleOverview from '../components/vehicle/vehicleOverview';
import {
	Container,
	Card,
	Heading,
	CardHeader,
	CardBody,
	Stack,
	StackDivider,
} from '@chakra-ui/react';

const VehiclesPage = () => {
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		VehicleService.getAllVehicles().then((res) => {
			setVehicles(res);
		}).catch((err) => {
			console.log(err);
		});
	}, []);


	return (
		<Container className="my-8">
			<Card>
				<CardHeader>
					<Heading size="md">All Vehicles</Heading>
					<div>Vehicles Page</div>
				</CardHeader>

				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{vehicles.map((vehicle) => (
							<vehicleOverview key={vehicle.vin} order={vehicle} />
						))}
					</Stack>
				</CardBody>
			</Card>
		</Container>
	)
};

export default VehiclesPage;
