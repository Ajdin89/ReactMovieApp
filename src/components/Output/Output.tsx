import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '../Container';
import Movies from '../Movies/Movies';
import TvShows from '../TVShows/TvShows';

const Output = (): JSX.Element => {
	return (
			<Router>
				<Container>
					<Switch>
						<Route path="/" exact component={Movies}/>
						<Route path="/tvshows" component={TvShows} />
					</Switch>
				</Container>
			</Router>
	);
};

export default Output;
