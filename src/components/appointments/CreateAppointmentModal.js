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

const CreateAppointmentModal = ({ vehicle }) => {
	const [date, setDate] = useState();
	const [notes, setNotes] = useState('');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	useEffect(() => {
		setDate(dateFormat(new Date(), 'yyyy-mm-dd'));
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		await AppointmentService.createReservation({
			vin: vehicle.vin,
			appDate: date,
			notes: notes,
		})
			.then((res) => {
				onClose();
				navigate('/appointments');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleCancel = () => {
		setDate(dateFormat(new Date(), 'yyyy-mm-dd'));
		setNotes('');
		onClose();
	};

	return (
		<>
			<Button
				colorScheme="teal"
				size="md"
				variant="outline"
				className="w-fit mt-2 mr-1 self-end"
				onClick={onOpen}
			>
				Schedule Test Drive
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						Create Appointment - {vehicle.brand} {vehicle.model}{' '}
						{vehicle.year}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl isRequired>
							<FormLabel>Choose Date</FormLabel>
							<input
								type="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel className="mt-2">
								Additional Notes
							</FormLabel>
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

export default CreateAppointmentModal;
