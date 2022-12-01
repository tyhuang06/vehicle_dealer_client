import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

const AppointmentOverview = ({ appoint }) => {
	return (
		<Box className="flex justify-between">
			<div>
				<Heading size="xs" textTransform="uppercase">
					Appointment #{appoint.app_id}
				</Heading>
				<Text pt="2" fontSize="sm">
					Scheduled Date: {dateFormat(appoint.app_date, 'mm/dd/yyyy')}
				</Text>
			</div>
			<div className="flex items-center">
				<Link to={`/appointments/${appoint.app_id}`}>
					<Button colorScheme="teal" variant="outline">
						Details
					</Button>
				</Link>
			</div>
		</Box>
	);
};

export default AppointmentOverview;
