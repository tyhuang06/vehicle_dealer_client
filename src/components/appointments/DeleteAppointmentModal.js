import { React, useRef } from 'react';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
	useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import AppointmentService from '../../services/AppointmentService';

const DeleteAppointmentModal = ({ appointment }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	const navigate = useNavigate();

	const handleDelete = async () => {
		await AppointmentService.deleteReservation(appointment.app_id)
			.then((res) => {
				onClose();
				navigate('/appointments');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Button
				colorScheme="red"
				size="sm"
				variant="outline"
				className="w-fit mt-2 ml-2"
				onClick={onOpen}
			>
				Delete
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Appointment
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button
								ref={cancelRef}
								onClick={onClose}
								variant="ghost"
							>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								onClick={handleDelete}
								ml={3}
							>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};

export default DeleteAppointmentModal;
