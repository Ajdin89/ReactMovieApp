import React from 'react';
import Container from '../../Container';
import NavMenu from './NavMenu'
import Search from './Search'

const Nav = () => {
	return (
		<div>
			<Container>
				<h1 className="header">React Movie App</h1>
				<NavMenu />
				<Search />
			</Container>
		</div>
	);
};

export default Nav;
