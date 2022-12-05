import React, { useCallback, useEffect, useState } from 'react';
import VehicleService from '../../services/VehicleService';
import VehicleOverview from '../../components/vehicle/VehicleOverview';
import {Link} from 'react-router-dom';
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
	Text,
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
	// console.log(vehicles);
	// const findByBrand = useCallback(() =>{
	// 	setCurrentSearchMode("Brand");
	// 	//todo
	// }, [searchBrand]);


	const onChangeSearchBrand = e => {
		const searchBrand = e.target.value;
		setSearchBrand(searchBrand);
	};
	const onChangeSearchType = e => {
		const searchType = e.target.value;
		setSearchType(searchType);
	};
	const onChangeSearchColor = e => {
		const searchColor = e.target.value;
		setSearchColor(searchColor);
	};
	
	return (
		<Container className="my-8">
			<Heading>
				All Vehicles
			</Heading>
			<br></br>
			<br></br>
			<Grid templateColumns = 'repeat(3, 1fr)' gap = {8}>
				
				<GridItem>
					<Input placeholder = "search by brand" value = {searchBrand} 
					onChange = {onChangeSearchBrand}></Input>
					
					<Button> <Link to ={`/vehicles/brand/${searchBrand}`}> Search</Link> 
						{/* {(() => { if (searchBrand !== ""){
						<Link to ={`/vehicles/brand/${searchBrand}`}> </Link> }
						else {
							<Link to ={`/vehicles`}> </Link>
						}})}	 */}
					</Button>
				
				</GridItem>
				<GridItem>
					<Input placeholder='search by type' value = {searchType}
					onChange = {onChangeSearchType}>
					</Input>
					<Button> <Link to ={`/vehicles/type/${searchType}`}> Search</Link> </Button>
				</GridItem>
				
				<GridItem>
					<Input placeholder='search by color' value = {searchColor}
					onChange = {onChangeSearchColor}>
					</Input>
					<Button> <Link to ={`/vehicles/color/${searchColor}`}> Search</Link></Button>
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
