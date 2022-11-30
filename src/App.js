import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './pages/AuthPage';
import VehiclesPage from './pages/VehiclesPage';
import AllOrdersPage from './pages/orders/AllOrdersPage';
import AllAppointmentsPage from './pages/appointments/AllAppointmentsPage';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<AuthPage />}></Route>
				<Route path="/vehicles" element={<VehiclesPage />}></Route>
				<Route path="/orders" element={<AllOrdersPage />}></Route>
				<Route
					path="/appointments"
					element={<AllAppointmentsPage />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
