import {React, useEffect, useState} from 'react';
import VehicleService from '../../services/VehicleService';
import VehicleOverview from '../../components/vehicle/VehicleOverview';
import {Link, useParams} from 'react-router-dom';
import {
	Container,
	Card,
	CardBody,
	Stack,
	Heading,
    StackDivider,
} from '@chakra-ui/react';
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid';


const VehiclesByColorPage = () => {
    const [vehicles, setVehicles] = useState([]);
    const {color} = useParams();

    useEffect(() => {
        VehicleService.getVehicleByColor(color)
        .then((res) => {
            setVehicles(res);
        })
        .catch((err) =>{
            console.log(err);
        });
    }, [color]);
    console.log(vehicles);

    return (
        <Container className="my-8">
            <Link to="/vehicles"
		    className="flex items-center hover:underline w-fit rounded-md p-2">
            <ArrowSmallLeftIcon className="w-8 h-8" />
            <div>All Vehicles</div>
		    </Link>
            <br></br>
			<Heading>
				{color} vehicles
			</Heading>
            
            <br></br>
			<Card>
				<CardBody>
					{/* <div>test</div> */}
					<Stack divider={<StackDivider />} spacing="4">

                        {vehicles.map((onevehicle) => {
                            return (<VehicleOverview key={onevehicle.vin} vehicle={onevehicle}/>)
                        })}
                    </Stack>
					{/* <Stack divider={<StackDivider />} spacing="4">
						{vehicles.map((onevehicle) => {
							return (<VehicleOverview key ={onevehicle.vin} vehicle={onevehicle }/>)
						})}
					</Stack> */}
					
				</CardBody>
			</Card>
		</Container>

    );
};

export default VehiclesByColorPage;