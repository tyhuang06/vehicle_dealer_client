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
	Grid,
	GridItem,
	Button,
	Input,
} from '@chakra-ui/react';



const AllVehiclesPage = () => {
	const [vehicles, setVehicles] = useState([]);
	const [searchBrand, setSearchBrand] = useState("");
	const [searchType, setSearchType] = useState("");
	const [searchColor, setSearchColor] = useState("");
	// const [searchElectric] = useState("");
	// const [searchPrice] = useState("");
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
	console.log(vehicles);
	const onChangeSearchBrand = e => {
		const searchBrand = e.target.value;
		setSearchBrand(searchBrand);
	}
	return (
		<Container className="my-8">
			<Heading>
				All Vehicles
			</Heading>
			<br></br>
			<br></br>
			<Grid templateColumns = 'repeat(3, 1fr)' gap = {8}>
				
				<GridItem>
					<Input placeholder = "search by brand"></Input>
					<Button> Search </Button>
				</GridItem>
				<GridItem>
					<Input placeholder='search by type'>
					</Input>
					<Button> Search</Button>
				</GridItem>
				<GridItem>
					<Input placeholder='search by color'>
					</Input>
					<Button> Search</Button>
				</GridItem>

			</Grid>

			{/* <Col>
				<Form.Group >
					<Form.Control
					type= "text"
					placeholder = "Search by title"
					value = {searchBrand}
					onChange = {onChangeSearchBrand}
					/>
				</Form.Group>
				<Button
					colorScheme="teal"
					size="sm"
					variant="outline"
					className="w-fit mt-2 self-end"
					// onClick={onOpen}
					// onClick = {findByTitle}
				>
					Search
				</Button>
				</Col> */}
				<br></br>
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
	);
};

export default AllVehiclesPage;
