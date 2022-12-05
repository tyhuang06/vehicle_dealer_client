import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './pages/AuthPage';
// import VehiclesPage from './pages/VehiclesPage';
import AllVehiclesPage from './pages/vehicles/AllVehiclesPage';
import SingleVehiclePage from './pages/vehicles/SingleVehiclePage';
import AllOrdersPage from './pages/orders/AllOrdersPage';
import AllAppointmentsPage from './pages/appointments/AllAppointmentsPage';
import SingleOrderPage from './pages/orders/SingleOrderPage';
import SingleAppointmentPage from './pages/appointments/SingleAppointmentPage';
import VehiclesByBrandPage from './pages/vehicles/VehiclesByBrandPage';
import VehiclesByTypePage from './pages/vehicles/VehiclesByTypePage';
import VehiclesByColorPage from './pages/vehicles/VehiclesByColorPage';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<AuthPage />}></Route>
				<Route path="/vehicles" element={<AllVehiclesPage />}></Route>
				<Route path="/vehicles/id/:id" element={<SingleVehiclePage />}></Route>
				<Route path="/vehicles/brand/:brand" element={<VehiclesByBrandPage />}></Route>
				<Route path="/vehicles/type/:type" element={<VehiclesByTypePage />}> </Route>
				<Route path="/vehicles/color/:color" element={<VehiclesByColorPage />}> </Route>
				<Route path="/orders" element={<AllOrdersPage />}></Route>
				<Route path="/orders/:id" element={<SingleOrderPage />}></Route>
				<Route
					path="/appointments"
					element={<AllAppointmentsPage />}
				></Route>
				<Route
					path="/appointments/:id"
					element={<SingleAppointmentPage />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
