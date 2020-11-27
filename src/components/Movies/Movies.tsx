import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/MovieContext';
import Container from '../Container';
import Nav from '../Navigate/Nav/Nav';
import MovieItem from './MovieItem';
import Spinner from '../Spinner';

const Movies = (): JSX.Element => {
	const { movies, isLoading } = useContext(AppContext);

	return (
		<>
			<Nav />
			<Container>
				<section className='showcase'>
					{movies.results && movies.results.length === 0 && (
						<h1 className='error'>Result not found!!!</h1>
					)}
					{isLoading ? (
						<Spinner />
					) : (
						movies.results &&
						movies.results.slice(10).map((movieItem: any) => (
							<Link key={movieItem.id} to={`/movie/${movieItem.id}`}>
								<MovieItem movieItem={movieItem} />
							</Link>
						))
					)}
				</section>
			</Container>
		</>
	);
};

export default Movies;
