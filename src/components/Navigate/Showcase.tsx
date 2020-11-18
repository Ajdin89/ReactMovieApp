import React from 'react';
import Container from '../Container';
import Output from '../Output/Output';
import Nav from './Nav/Nav';

const Showcase = (): JSX.Element => {
	return (
		<div>
			<Nav />
			<Container>
				<Output />
			</Container>
		</div>
	);
};

export default Showcase;
