import React from 'react';
import spinner from '../../resource/spinner.gif';
import Container from '../Container';

const Spinner = (): JSX.Element => {
	return (
		<Container>
			<div className='spin-wrap'>
				<img src={spinner} alt='loading' className='spinner' />
			</div>
		</Container>
	);
};

export default Spinner;
