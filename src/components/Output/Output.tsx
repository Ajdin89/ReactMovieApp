import React from 'react';
import Container from '../Container';
import Movies from '../Movies/Movies';

const Output = (): JSX.Element => {
	return (
		<div>
			<Container>
				<Movies />
			</Container>
		</div>
	);
};

export default Output;
