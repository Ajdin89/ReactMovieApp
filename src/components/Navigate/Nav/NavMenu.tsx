import React from 'react';
import NavLink from './NavLink';

const NavMenu = () => {
	return (
		<nav className="wrapper">
			<NavLink btnText="Movies" />
			<NavLink btnText="TVShows" />
		</nav>
	);
};

export default NavMenu;