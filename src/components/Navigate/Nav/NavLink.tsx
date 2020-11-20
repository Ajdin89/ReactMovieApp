import React, { useContext } from 'react';
import { AppContext } from '../../../Context/MovieContext';
import { AppProps } from '../../../interfaces';

const NavLink = ({ btnText }: AppProps): JSX.Element => {
	const { activeLink, setActiveLink } = useContext(AppContext);

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
