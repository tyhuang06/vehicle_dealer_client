import { React, useEffect, useState } from 'react';
import {
	Container,
	Card,
	Heading,
	CardHeader,
	CardBody,
	Stack,
	StackDivider,
} from '@chakra-ui/react';
import OrderService from '../../services/OrderService';
import OrderOverview from '../../components/orders/orderOverview';

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
							<OrderOverview key={order.order_id} order={order} />
						))}
					</Stack>
				</CardBody>
			</Card>
		</Container>
	);
};

export default AllOrdersPage;
