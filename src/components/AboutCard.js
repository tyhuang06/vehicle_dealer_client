import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Flex,
	Avatar,
	Box,
	Heading,
	Text,
	Image,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutCard = ({ info }) => {
	return (
		<Card>
			<CardHeader>
				<Flex spacing="4">
					<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
						<Avatar name={info.name} src={info.image} />

						<Box>
							<Heading size="sm">{info.name}</Heading>
							<Text>{info.subtitle}</Text>
						</Box>
					</Flex>
				</Flex>
			</CardHeader>
			<CardBody>
				<Text>Blablabla</Text>
			</CardBody>

			<CardFooter flexWrap="wrap">
				<a href={info.linkedIn} target="_blank" rel="noreferrer">
					<FaLinkedin className="w-8 h-8" />
				</a>
				<a
					href={info.github}
					target="_blank"
					rel="noreferrer"
					className="ml-2"
				>
					<FaGithub className="w-8 h-8" />
				</a>
			</CardFooter>
		</Card>
	);
};

export default AboutCard;
