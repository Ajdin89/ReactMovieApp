import React, { useContext } from 'react';
import { AppProps } from '../../../interfaces';
import { MovieContext } from '../../../Context/MovieContext';

const NavLink = ({ btnText }: AppProps): JSX.Element => {
	const { activeLink, setActiveLink } = useContext(MovieContext);

	return (
		<div>
			<button
				className='btn-link'
				onClick={() => setActiveLink(btnText)}
				style={{ color: activeLink === btnText ? 'tomato' : '#fefefe' }}
			>
				{btnText}
			</button>
		</div>
	);
};

export default NavLink;
