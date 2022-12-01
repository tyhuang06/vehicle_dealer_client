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
import AppointmentService from '../../services/AppointmentService';
import AppointmentOverview from '../../components/appointments/AppointmentOverview';

const AllAppointmentsPage = () => {
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		AppointmentService.getAllReservations()
			.then((res) => {
				setAppointments(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Container className="my-8">
			<Card>
				<CardHeader>
					<Heading size="md">All Appointments</Heading>
				</CardHeader>

				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{appointments.map((appointment) => (
							<AppointmentOverview
								key={appointment.app_id}
								appoint={appointment}
							/>
						))}
					</Stack>
				</CardBody>
			</Card>
		</Container>
	);
};

export default AllAppointmentsPage;
