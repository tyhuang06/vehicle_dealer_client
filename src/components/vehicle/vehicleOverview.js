import React from 'react';
import { Link } from 'react-router-dom';

import {
	Container,
	Card,
	CardHeader,
	CardBody,
	Image,
	Divider,
	CardFooter,
	Text,
	Stack,
	Box,
	Button,
	Heading,
} from '@chakra-ui/react';

const VehicleOverview = ({ vehicle }) => {
	return (
		<Box className="flex justify-between w-full">
			<Card
				direction={{ base: 'column', sm: 'row' }}
				overflow="hidden"
				variant="outline"
				className="w-full"
			>
				<Image
					objectFit="cover"
					maxW={{ base: '100%', sm: '200px' }}
					src={vehicle.image_path}
					alt="Photo of a car"
					borderRadius="lg"
				/>
				<Stack>
					<CardBody>
						<Heading size="xs" textTransform="uppercase">
							{vehicle.brand} {vehicle.model} {vehicle.year}
						</Heading>
						<br></br>
						<Text color="teal.600" fontSize="2xl">
							$ {vehicle.price}
						</Text>
					</CardBody>
					<CardFooter>
						<Link to={`/vehicles/id/${vehicle.vin}`}>
							<Button colorScheme="teal" variant="outline">
								Details
							</Button>
						</Link>
					</CardFooter>
				</Stack>
			</Card>
		</Box>
	);
};

export default VehicleOverview;
