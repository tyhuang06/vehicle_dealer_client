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
import { useNavigate } from 'react-router-dom';
import OrderService from '../../services/OrderService';

const EditOrderModal = ({ order }) => {
	const [notes, setNotes] = useState(order.notes);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	useEffect(() => {
		setNotes(order.notes);
	}, [order.notes]);

	const handleSubmit = (e) => {
		e.preventDefault();

		OrderService.updateOrder(order.order_id, { notes })
			.then((res) => {
				onClose();
				navigate(0);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleCancel = () => {
		setNotes(order.notes);
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
				Edit Order
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Order #{order.order_id}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel>Update Notes</FormLabel>
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

export default EditOrderModal;
