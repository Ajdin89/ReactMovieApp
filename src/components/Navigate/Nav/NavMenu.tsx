import React from 'react';
// import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const NavMenu = (): JSX.Element => {
	return (
		<nav className='wrapper'>
			{/* <Link to='/'> */}
				<NavLink btnText='Movies' />
			{/* </Link> */}
			{/* <Link to='/tvshows'> */}
				<NavLink btnText='TVShows' />
			{/* </Link> */}
		</nav>
	);
};

export default NavMenu;
