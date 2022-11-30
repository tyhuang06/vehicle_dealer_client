import { React, useEffect, useState } from 'react';
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
		<div>
			{orders.map((order) => (
				<div>{order.order_id}</div>
			))}
		</div>
	);
};

export default AllOrdersPage;
