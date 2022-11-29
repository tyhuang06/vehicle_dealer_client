import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VehiclesPage from './pages/VehiclesPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/vehicles" element={<VehiclesPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
