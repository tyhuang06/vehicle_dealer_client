import { React, useEffect, useState } from 'react';
import {
	Container,
	Card,
	Heading,
	CardHeader,
	CardBody,
	Stack,
	StackDivider,
	Box,
	Text,
	Button,
} from '@chakra-ui/react';
import dateFormat from 'dateformat';
import OrderService from '../../services/OrderService';

const AllOrdersPage = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		OrderService.getAllOrders()
			.then((res) => {
				setOrders(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Container className="pt-8">
			<Card>
				<CardHeader>
					<Heading size="md">All Orders</Heading>
				</CardHeader>

				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{orders.map((order) => (
							<Box className="flex justify-between">
								<div>
									<Heading
										size="xs"
										textTransform="uppercase"
									>
										Order: {order.order_id}
									</Heading>
									<Text pt="2" fontSize="sm">
										{dateFormat(
											order.order_date,
											'mm/dd/yyyy'
										)}
									</Text>
								</div>
								<div className="flex items-center">
									<Button
										colorScheme="teal"
										variant="outline"
									>
										Details
									</Button>
								</div>
							</Box>
						))}
					</Stack>
				</CardBody>
			</Card>
		</Container>
	);
};

export default AllOrdersPage;
