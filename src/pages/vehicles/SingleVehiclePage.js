import {react, useEffect, useState} from 'react';
import VehicleService from '../../services/VehicleService';
import {Link, useParams} from 'react-router-dom';
import {
	Container,
	Card,
	CardBody,
	Image,
	Divider,
	CardFooter,
	Text,
	Stack,
	Heading,
} from '@chakra-ui/react';
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid';
import {
	SparklesIcon,
	TruckIcon,
	ClockIcon,
    UsersIcon,
	HomeModernIcon,
	IdentificationIcon,
	DocumentTextIcon,
    SwatchIcon,
} from '@heroicons/react/24/outline';

const SingleVehiclePage = () => {
    const [vehicle, setVehicle] = useState({});
    const {id} = useParams();
    useEffect(() => {
        VehicleService.getVehicleById(id).then((res) => {
            setVehicle(res);
        })
        .catch((err) => {
            console.log(err);
        })
    });
    return (
        <Container className="my-8">
			<Link
				to="/vehicles"
				className="flex items-center hover:underline w-fit rounded-md p-2"
			>
				<ArrowSmallLeftIcon className="w-8 h-8" />
				<div>All Vehicles</div>
			</Link>

			<div className="mt-4 text-2xl">
				Vehicle Vin Number: {vehicle.vin}
			</div>

			<Card className="mt-2">
				<CardBody>
					<Image
						src={vehicle.image_path}
						alt="Photo of a car"
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">
							{vehicle.brand} {vehicle.model} {vehicle.year}
						</Heading>
						
						{vehicle.new_or_used === 1 ? (
							<div className="flex items-center">
								<SparklesIcon className="w-4 h-4" />
								<div className="ml-1">Brand New</div>
							</div>
						) : (
							<div className="flex items-center">
								<TruckIcon className="w-4 h-4" />
								<div className="ml-1">
									Mileage: {vehicle.mileage}
								</div>
							</div>
						)}
						<div className="flex items-center">
							<HomeModernIcon className="w-4 h-4" />
							<div className="ml-1">
								Dealer: {vehicle.dealer_id}
							</div>
						</div>
                        <div className="flex items-center">
                            <SwatchIcon className="w-4 h-4" />
                            <div className="ml-1">Color: {vehicle.color}</div>
                            
                        </div>
                        <div className="flex items-center">
                            <UsersIcon className="w-4 h-4" />
                            <div className="ml-1">Seats: {vehicle.num_of_seats}</div>
                        </div>
                        
                        {vehicle.is_electric_car === 1 ? (
							<div className="flex items-center">
								<SparklesIcon className="w-4 h-4" />
								<div className="ml-1">Energy source: Electric Car</div>
							</div>
						) : (
							<div className="flex items-center">
								<TruckIcon className="w-4 h-4" />
								<div className="ml-1">
                                Energy source: Gasoline
								</div>
							</div>
						)}
                        
                        {/* if (vehicle.technology !== ""){
                            <div>
                                Technology: {vehicle.technology}
                            </div>
                        }
                        if (vehicle.manufacture !== ""){
                            <div>
                                Manufacture: {vehicle.manufacture}
                            </div>
                        } */}
                        
                        <Text color="teal.600" fontSize="2xl">
							$ {vehicle.price}
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter className="flex flex-col">
                    <div>
                        Schedule a test drive
                    </div>
				</CardFooter>
			</Card>
		</Container>

    );
};
export default SingleVehiclePage;