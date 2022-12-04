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
const VehiclesByBrandPage = ({brand}) => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() =>{
        VehicleService.getVehicleByBrand(brand)
        .then((res) => {
            setVehicles(res);
        }).catch((err) =>{
            console.log(err);
        });
    }, []);

    return (
        <Link to="/vehicles"
		    className="flex items-center hover:underline w-fit rounded-md p-2">
            <ArrowSmallLeftIcon className="w-8 h-8" />
            <div>All Vehicles</div>
		</Link>
        
    )
}

export default VehiclesByBrandPage;