import React from 'react';
import NavMenu from './NavMenu'
import Search from './Search'

const Nav = (): JSX.Element => {
	return (
		<div className="navbar">
				<NavMenu />
				<Search />
		</div>
	);
};

export default Nav;
