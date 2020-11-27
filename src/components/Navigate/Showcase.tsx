import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Output from '../Output';

const Showcase = (): JSX.Element => {
	return (
		<Router>
				<Output />
		</Router>
	);
};

export default Showcase;
