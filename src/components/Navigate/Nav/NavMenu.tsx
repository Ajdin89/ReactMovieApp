import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = (): JSX.Element => {
	return (
		<nav className='nav-wrap'>
			<NavLink exact to='/movies' className='btn-link'>
				Movies
			</NavLink>
			<NavLink exact to='/tvshows' className='btn-link'>
				TV Shows
			</NavLink>
		</nav>
	);
};

export default NavMenu;
