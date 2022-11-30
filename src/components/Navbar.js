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
	useColorModeValue,
	Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
	Bars3Icon,
	XMarkIcon,
	ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
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
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));

	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
								{userInfo.first_name}
							</MenuButton>
							<MenuList>
								<MenuGroup title="Profile">
									<MenuItem>Link 1</MenuItem>
									<MenuItem>Link 2</MenuItem>
								</MenuGroup>

								<MenuDivider />
								<MenuItem>Log Out</MenuItem>
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
		</>
	);
};

export default Navbar;
