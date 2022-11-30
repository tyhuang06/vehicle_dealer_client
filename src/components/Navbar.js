import React from 'react';
import {
	Box,
	Flex,
	HStack,
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuGroup,
	MenuDivider,
	useDisclosure,
	Stack,
	useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Bars3Icon,
	XMarkIcon,
	ChevronDownIcon,
	DocumentTextIcon,
	CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import {
	UserCircleIcon,
	ArrowLeftOnRectangleIcon,
} from '@heroicons/react/20/solid';

const Navbar = () => {
	// Links for the navbar
	const Links = [
		{ name: 'Shop All Cars', href: '/vehicles' },
		{ name: 'About', href: '/about' },
	];

	const NavLink = ({ children }) => (
		<Link
			className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
			to={children.href}
		>
			{children.name}
		</Link>
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const toast = useToast();

	const userInfo = JSON.parse(localStorage.getItem('userInfo'));

	const handleLogout = () => {
		localStorage.removeItem('userInfo');
		toast({
			title: 'Logout Success!',
			status: 'success',
			duration: 5000,
			isClosable: true,
			position: 'bottom',
		});
		navigate('/');
	};

	return (
		<>
			{userInfo ? (
				<Box className="px-4" bg="gray.100">
					<Flex
						h={14}
						alignItems={'center'}
						justifyContent={'space-between'}
					>
						<IconButton
							size={'md'}
							icon={
								isOpen ? (
									<XMarkIcon className="w-8 h-8" />
								) : (
									<Bars3Icon className="w-8 h-8" />
								)
							}
							aria-label={'Open Menu'}
							display={{ md: 'none' }}
							onClick={isOpen ? onClose : onOpen}
							className="flex items-center justify-center"
						/>
						<HStack spacing={8} alignItems={'center'}>
							<Box className="font-bold">Vehicle Dealer</Box>
							<HStack
								as={'nav'}
								spacing={4}
								display={{ base: 'none', md: 'flex' }}
							>
								{Links.map((link) => (
									<NavLink key={link.name}>{link}</NavLink>
								))}
							</HStack>
						</HStack>
						<Flex alignItems={'center'}>
							<Menu>
								<MenuButton
									as={Button}
									cursor={'pointer'}
									leftIcon={
										<UserCircleIcon className="w-8 h-8" />
									}
									rightIcon={
										<ChevronDownIcon className="w-4 h-4" />
									}
									className="focus:outline-none rounded-full nav-user-btn"
								>
									{userInfo ? userInfo.first_name : 'User'}
								</MenuButton>
								<MenuList>
									<MenuGroup title="Profile">
										<Link to="/orders">
											<MenuItem
												icon={
													<DocumentTextIcon className="w-6 h-6" />
												}
											>
												My Orders
											</MenuItem>
										</Link>
										<Link to="/appointments">
											<MenuItem
												icon={
													<CalendarDaysIcon className="w-6 h-6" />
												}
											>
												My Appointments
											</MenuItem>
										</Link>
									</MenuGroup>

									<MenuDivider />
									<MenuItem
										icon={
											<ArrowLeftOnRectangleIcon className="w-6 h-6" />
										}
										onClick={handleLogout}
									>
										Log Out
									</MenuItem>
								</MenuList>
							</Menu>
						</Flex>
					</Flex>

					{isOpen ? (
						<Box pb={4} display={{ md: 'none' }}>
							<Stack as={'nav'} spacing={4}>
								{Links.map((link) => (
									<NavLink key={link.name}>{link}</NavLink>
								))}
							</Stack>
						</Box>
					) : null}
				</Box>
			) : null}
		</>
	);
};

export default Navbar;
