import React from 'react';
import {
	Container,
	Text,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from '@chakra-ui/react';

const HomePage = () => {
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
						<TabPanel>login</TabPanel>
						<TabPanel>signup</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		</Container>
	);
};

export default HomePage;
