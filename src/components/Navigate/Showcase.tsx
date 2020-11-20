import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '../Container';
import Output from '../Output/Output';
import Nav from './Nav/Nav';

const Showcase = (): JSX.Element => {
	return (
		<Router>
			<Nav />
			<Container>
				<Output />
			</Container>
		</Router>
	);
};

export default Showcase;
