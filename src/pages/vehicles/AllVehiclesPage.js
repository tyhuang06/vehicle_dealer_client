import React, { useEffect, useState } from 'react';
import VehicleService from '../../services/VehicleService';
import VehicleOverview from '../../components/vehicle/VehicleOverview';
import {
	Container,
	Card,
	Heading,
	CardHeader,
	CardBody,
	Stack,
	StackDivider,
} from '@chakra-ui/react';

const AllVehiclesPage = () => {
	const [vehicles, setVehicles] = useState([]);
	const [searchBrand, setSearchBrand] = useState("");
	const [searchType, setSearchType] = useState("");
	const [searchElectric] = useState("");
	const [searchPrice] = useState("");
	const [currentSearchMode, setCurrentSearchMode] = useState("");


	useEffect(() => {
		VehicleService.getAllVehicles()
			.then((res) => {
				setVehicles(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	return (
		<Container className="my-8">
			<Heading>
				All Vehicles
			</Heading>

			<Card>
				<CardBody>
					{/* <div>test</div> */}
					
					<Stack divider={<StackDivider />} spacing="4">
						{vehicles.map((onevehicle) => {
							return (<VehicleOverview key ={onevehicle.vin} vehicle={onevehicle }/>)
						})}
					</Stack>
					
				</CardBody>
			</Card>
		</Container>
	)
};

export default AllVehiclesPage;
