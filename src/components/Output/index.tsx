import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from '../Movies/Movies';
import MovieItemDetail from '../Movies/MovieItemDetail';
import TvShows from '../TVShows/TvShows';
import TvShowItemDetail from '../TVShows/TvShowItemDetail';

const Output = (): JSX.Element => {
	return (
			<Switch>
				<Redirect from='/' exact to="tvshows" />
				<Route path='/movies' component={Movies} />
				<Route path='/movie/:id' component={MovieItemDetail}/>
				<Route path='/tvshows' component={TvShows} />
				<Route path='/tvshow/:id' component={TvShowItemDetail} />
			</Switch>
	);
};

export default Output;
