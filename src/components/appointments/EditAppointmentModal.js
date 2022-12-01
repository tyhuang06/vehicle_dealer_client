import { React, useEffect, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	FormControl,
	FormLabel,
	Textarea,
} from '@chakra-ui/react';
import dateFormat from 'dateformat';
import { useNavigate } from 'react-router-dom';
import AppointmentService from '../../services/AppointmentService';

const EditAppointmentModal = ({ appointment }) => {
	const [date, setDate] = useState();
	const [notes, setNotes] = useState(appointment.other_info);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	useEffect(() => {
		setNotes(appointment.notes);
	}, [appointment.notes]);

	useEffect(() => {
		setDate(dateFormat(appointment.app_date, 'yyyy-mm-dd'));
	}, [appointment.app_date]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const appDate = date;

		AppointmentService.updateReservation(appointment.app_id, {
			appDate,
			notes,
		})
			.then((res) => {
				onClose();
				navigate(0);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleCancel = () => {
		setDate(appointment.app_date);
		setNotes(appointment.notes);
		onClose();
	};

	return (
		<>
			<Button
				colorScheme="teal"
				size="sm"
				variant="outline"
				className="w-fit mt-2 self-end"
				onClick={onOpen}
			>
				Edit Appointment
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						Edit Appointment #{appointment.app_id}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Modify Date</FormLabel>
							<input
								type="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel className="mt-2">Update Notes</FormLabel>
							<Textarea
								value={notes}
								onChange={(e) => setNotes(e.target.value)}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button variant="ghost" onClick={handleCancel}>
							Cancel
						</Button>
						<Button
							colorScheme="blue"
							ml={3}
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditAppointmentModal;
