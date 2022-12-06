import { React, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import OrderService from '../../services/OrderService';

const CreateOrderModal = ({ vehicle }) => {
	const [notes, setNotes] = useState('');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await OrderService.createOrder({ vin: vehicle.vin, notes })
			.then((res) => {
				onClose();
				navigate('/orders');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleCancel = () => {
		setNotes('');
		onClose();
	};

	return (
		<>
			<Button
				colorScheme="teal"
				size="md"
				variant="outline"
				className="w-fit mt-2 self-end"
				onClick={onOpen}
			>
				Order
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						Create Order - {vehicle.brand} {vehicle.model}{' '}
						{vehicle.year}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl isRequired>
							<FormLabel>Additional Notes</FormLabel>
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

export default CreateOrderModal;
