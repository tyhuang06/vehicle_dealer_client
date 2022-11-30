import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	useToast,
} from '@chakra-ui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const Signup = () => {
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmpassword, setConfirmpassword] = useState();
	const [firstName, setFirstname] = useState();
	const [lastName, setLastname] = useState();

	const navigate = useNavigate();
	const toast = useToast();

	const handleClick = () => setShow(!show);

	const handleSubmit = async () => {
		setLoading(true);

		if (
			!firstName ||
			!lastName ||
			!email ||
			!password ||
			!confirmpassword
		) {
			toast({
				title: 'Please fill in all the fields',
				status: 'warning',
				duration: 5000,
				isClosable: true,
				position: 'bottom',
			});
			setLoading(false);
			return;
		}

		if (password !== confirmpassword) {
			toast({
				title: 'Passwords do not match',
				status: 'warning',
				duration: 5000,
				isClosable: true,
				position: 'bottom',
			});
			setLoading(false);
			return;
		}

		await AuthService.signup({
			firstName,
			lastName,
			email,
			password,
		})
			.then((res) => {
				toast({
					title: 'Registration success!',
					status: 'success',
					duration: 5000,
					isClosable: true,
					position: 'bottom',
				});

				localStorage.setItem('userInfo', JSON.stringify(res));
				setLoading(false);
				navigate('/vehicles');
			})
			.catch((err) => {
				toast({
					title: 'Error!',
					description: err.response.data,
					status: 'error',
					duration: 5000,
					isClosable: true,
					position: 'bottom',
				});
				setLoading(false);
			});
	};

	return (
		<div className="p-2">
			<FormControl id="firstname" isRequired className="mb-2">
				<FormLabel>First Name</FormLabel>
				<Input
					placeholder="Enter Your First Name"
					onChange={(e) => setFirstname(e.target.value)}
				/>
			</FormControl>

			<FormControl id="lastname" isRequired className="mb-2">
				<FormLabel>Last Name</FormLabel>
				<Input
					placeholder="Enter Your Last Name"
					onChange={(e) => setLastname(e.target.value)}
				/>
			</FormControl>

			<FormControl id="email" isRequired className="mb-2">
				<FormLabel>Email</FormLabel>
				<Input
					placeholder="Enter Your Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormControl>

			<FormControl id="password" isRequired className="mb-2">
				<FormLabel>Password</FormLabel>
				<InputGroup>
					<Input
						type={show ? 'text' : 'password'}
						placeholder="Enter Your Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<InputRightElement>
						<button
							className="w-full h-full flex items-center justify-center rounded-lg"
							onClick={handleClick}
						>
							{show ? (
								<EyeSlashIcon className="w-5 h-5 text-slate-700" />
							) : (
								<EyeIcon className="w-5 h-5 text-slate-700" />
							)}
						</button>
					</InputRightElement>
				</InputGroup>
			</FormControl>

			<FormControl id="confirm_password" isRequired className="mb-2">
				<FormLabel>Confirm Password</FormLabel>
				<InputGroup>
					<Input
						type={show ? 'text' : 'password'}
						placeholder="Confirm Password"
						onChange={(e) => setConfirmpassword(e.target.value)}
					/>
					<InputRightElement>
						<button
							className="w-full h-full flex items-center justify-center rounded-lg"
							onClick={handleClick}
						>
							{show ? (
								<EyeSlashIcon className="w-5 h-5 text-slate-700" />
							) : (
								<EyeIcon className="w-5 h-5 text-slate-700" />
							)}
						</button>
					</InputRightElement>
				</InputGroup>
			</FormControl>

			<Button
				colorScheme="blue"
				width="100%"
				style={{ marginTop: 15 }}
				onClick={handleSubmit}
				isLoading={loading}
			>
				Sign Up
			</Button>
		</div>
	);
};

export default Signup;
