import React from 'react';
import { AppProps } from '../../../Interfaces';

const NavLink = ({ btnText }: AppProps): JSX.Element => {
	return (
		<div>
			<button className='btn-link'>{btnText}</button>
		</div>
	);
};

export default NavLink;
