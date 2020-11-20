import React, { Component } from 'react';
import { AppContext } from '../../Context/MovieContext';
import Container from '../Container';
import Spinner from '../Spinner/Spinner';
import TvShowItem from './TvShowItem';
import { v4 as uuidv4 } from 'uuid';

interface AppProps {
	tvShowItem: any;
}
class TvShows extends Component<AppProps> {
	static contextType = AppContext;

	render(): JSX.Element {
		const { tvShows, isLoading } = this.context;
		// console.log(this.context);

		return (
			<>
				<Container>
					<section className='showcase'>
						{tvShows.results && tvShows.results.length === 0 && (
							<h1 className='error'>Result not found!!!</h1>
						)}
						{isLoading ? (
							tvShows.results &&
							tvShows.results
								.slice(10)
								.map((tvShowItem: any) => (
									<TvShowItem key={uuidv4()} tvShowItem={tvShowItem} />
								))
						) : (
							<Spinner />
						)}
					</section>
				</Container>
			</>
		);
	}
}

export default TvShows;
