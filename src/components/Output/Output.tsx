import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container';
import Movies from '../Movies/Movies';
import TvShows from '../TVShows/TvShows';

const Output = (): JSX.Element => {
	return (
		<Container>
			<Switch>
				<Route path='/' exact component={Movies} />
				<Route path='/tvshows' component={TvShows} />
			</Switch>
		</Container>
	);
};

export default Output;
