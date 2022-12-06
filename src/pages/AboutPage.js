import React from 'react';
import { Container } from '@chakra-ui/react';
import AboutCard from '../components/AboutCard';

const AboutPage = () => {
	const Info = [
		{
			name: 'Jamie Huang (Tzu-Yu)',
			subtitle: 'MSCS student, Northeastern University',
			email: 'tyhuang06@gmail.com',
			image: '/images/jamie.jpg',
			github: 'https://github.com/tyhuang06',
			linkedIn: 'https://www.linkedin.com/in/tyhuang06/',
		},
		{
			name: 'Kaiqi Zhang',
			subtitle: 'MSCS student, Northeastern University',
			email: 'zhang.kaiq@northeastern.edu',
			image: '',
			github: 'https://github.com/kaiqiz8',
			linkedIn: 'https://www.linkedin.com/in/kaiqi--zhang/',
		},
	];

	return (
		<Container className="my-8">
			<div className="text-2xl mb-2">About Us</div>
			{Info.map((info) => (
				<AboutCard key={info.name} info={info} />
			))}
		</Container>
	);
};

export default AboutPage;
