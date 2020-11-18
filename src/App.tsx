import React from 'react';
import './App.css';
import Showcase from './components/Navigate/Showcase';
import { MovieState } from './Context/MovieContext';

function App() {
	return (
		<div className='app'>
			<MovieState>
				<Showcase />
			</MovieState>
		</div>
	);
}

export default App;
