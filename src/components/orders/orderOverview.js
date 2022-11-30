import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import dateFormat from 'dateformat';

const OrderOverview = (order) => {
	return (
		<Box className="flex justify-between">
			<div>
				<Heading size="xs" textTransform="uppercase">
					Order: {order.order_id}
				</Heading>
				<Text pt="2" fontSize="sm">
					{dateFormat(order.order_date, 'mm/dd/yyyy')}
				</Text>
			</div>
			<div className="flex items-center">
				<Button colorScheme="teal" variant="outline">
					Details
				</Button>
			</div>
		</Box>
	);
};

export default OrderOverview;
