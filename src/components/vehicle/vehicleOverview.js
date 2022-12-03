import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const vehicleOverview = ({ vehicle }) => {
    return (
        <Box className="flex justify-between">
            <div>
                <Heading size="xs" textTransform="uppercase">
					Vehicles
				</Heading>
            </div>
            <div className="flex items-center">
				<Link to={`/vehicles/${vehicle.vin}`}>
					<Button colorScheme="teal" variant="outline">
						Details
					</Button>
				</Link>
			</div>
        </Box>
    );
};

export default vehicleOverview;


