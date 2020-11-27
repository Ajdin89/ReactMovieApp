import React, { Component } from 'react';
import { AppContext } from '../../Context/MovieContext';
import Container from '../Container';
import Spinner from '../Spinner';
import TvShowItem from './TvShowItem';
// import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Nav from '../Navigate/Nav/Nav';

export interface TvShowsProps {
	tvShowItem: any;
}
class TvShows extends Component<TvShowsProps> {
	static contextType = AppContext;

	render(): JSX.Element {
		const { tvShows, isLoading } = this.context;
		
		return (
			<>
				<Nav />
				<Container>
					<section className='showcase'>
						{tvShows.results && tvShows.results.length === 0 && (
							<h1 className='error'>Result not found!!!</h1>
						)}
						{isLoading ? (
							<Spinner />
						) : (
							tvShows.results &&
							tvShows.results.slice(10).map((tvShowItem: any, index: any) => (
								<Link  key={tvShowItem.id}to={`/tvshow/${tvShowItem.id}`}>
									<TvShowItem tvShowItem={tvShowItem} />
								</Link>
							))
						)}
					</section>
				</Container>
			</>
		);
	}
}

export default TvShows;
