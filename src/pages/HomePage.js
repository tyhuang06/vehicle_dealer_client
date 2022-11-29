import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Text,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from '@chakra-ui/react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

const HomePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));

		if (userInfo) {
			navigate('/');
		}
	}, [navigate]);

	return (
		<Container maxW="xl" className="flex flex-col items-center">
			<div className="flex bg-white w-full justify-center p-3 rounded-md h-fit mt-10 mb-5">
				<Text className="text-2xl">Vehicle Dealer</Text>
			</div>
			<div className="flex bg-white w-full p-4 rounded-md">
				<Tabs variant="soft-rounded" className="w-full">
					<TabList className="mb-2 flex">
						<Tab className="w-full focus:shadow-none">Login</Tab>
						<Tab className="w-full focus:shadow-none">Signup</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Login />
						</TabPanel>
						<TabPanel>
							<Signup />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		</Container>
	);
};

export default HomePage;
