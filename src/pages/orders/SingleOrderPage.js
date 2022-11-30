import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	Container,
	Card,
	CardBody,
	Image,
	Divider,
	CardFooter,
	Text,
	ButtonGroup,
	Button,
	Stack,
	Heading,
} from '@chakra-ui/react';
import dateFormat from 'dateformat';
import OrderService from '../../services/OrderService';

const SingleOrderPage = () => {
	const [order, setOrder] = useState({});
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

	return (
		<Container className="py-8">
			<Card>
				<CardBody>
					<Image
						src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						alt="Green double couch with wooden legs"
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">Living room Sofa</Heading>
						<Text>VIN: {order.vin}</Text>
						<Text>Get car info by vin then display</Text>
						<Text color="teal.600" fontSize="2xl">
							$450
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter className="flex flex-col">
					<div>Order #{order.order_id}</div>
					<div>
						Order Date: {dateFormat(order.order_date, 'mm/dd/yyyy')}
					</div>
					<div>Notes: {order.notes}</div>
					<div>
						Sales: {order.salesperson_id} add get api and display
						name
					</div>
					<Button
						colorScheme="teal"
						size="sm"
						variant="outline"
						className="w-fit mt-2 self-end"
					>
						Edit Order
					</Button>
				</CardFooter>
			</Card>
		</Container>
	);
};

export default SingleOrderPage;