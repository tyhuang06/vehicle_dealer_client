import React, { useEffect, useState } from 'react';
import VehicleService from '../../services/VehicleService';
import VehicleOverview from '../../components/vehicle/VehicleOverview';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Card,
	Heading,
	CardBody,
	Stack,
	StackDivider,
	Grid,
	GridItem,
	Button,
	Input,
	useToast,
} from '@chakra-ui/react';

const AllVehiclesPage = () => {
	const [vehicles, setVehicles] = useState([]);
	const [searchBrand, setSearchBrand] = useState('');
	const [searchType, setSearchType] = useState('');
	const [searchColor, setSearchColor] = useState('');

	const navigate = useNavigate();
	const toast = useToast();

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

	const onChangeSearchBrand = (e) => {
		const searchBrand = e.target.value;
		setSearchBrand(searchBrand);
	};
	const onChangeSearchType = (e) => {
		const searchType = e.target.value;
		setSearchType(searchType);
	};
	const onChangeSearchColor = (e) => {
		const searchColor = e.target.value;
		setSearchColor(searchColor);
	};

	const handleSearch = (keyword, filter) => {
		if (keyword === '') {
			toast({
				title: 'Search field is empty',
				description: 'Please enter a keyword to search',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		} else {
			navigate(`/vehicles/${filter}/${keyword}`);
		}
	};

	return (
		<Container className="my-8">
			<Heading>All Vehicles</Heading>
			<br></br>
			<br></br>
			<Grid templateColumns="repeat(3, 1fr)" gap={8}>
				<GridItem>
					<Input
						placeholder="search by brand"
						value={searchBrand}
						onChange={onChangeSearchBrand}
					></Input>

					<Button onClick={() => handleSearch(searchBrand, 'brand')}>
						Search
					</Button>
				</GridItem>
				<GridItem>
					<Input
						placeholder="search by type"
						value={searchType}
						onChange={onChangeSearchType}
					></Input>
					<Button onClick={() => handleSearch(searchType, 'type')}>
						Search
					</Button>
				</GridItem>

				<GridItem>
					<Input
						placeholder="search by color"
						value={searchColor}
						onChange={onChangeSearchColor}
					></Input>
					<Button onClick={() => handleSearch(searchColor, 'color')}>
						Search
					</Button>
				</GridItem>
			</Grid>
			<br></br>
			<Card>
				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{vehicles.map((onevehicle) => {
							return (
								<VehicleOverview
									key={onevehicle.vin}
									vehicle={onevehicle}
								/>
							);
						})}
					</Stack>
				</CardBody>
			</Card>
		</Container>
	);
};

export default AllVehiclesPage;
