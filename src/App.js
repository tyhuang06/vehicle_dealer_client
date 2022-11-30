import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './pages/AuthPage';
import VehiclesPage from './pages/VehiclesPage';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<AuthPage />}></Route>
				<Route path="/vehicles" element={<VehiclesPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
