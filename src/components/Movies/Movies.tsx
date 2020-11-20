import React, { useContext } from 'react';
import { AppContext } from '../../Context/MovieContext';
import Container from '../Container';
import MovieItem from './MovieItem';
import Spinner from '../Spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';

const Movies = (): JSX.Element => {
	const { movies, isLoading } = useContext(AppContext);

	return (
		<>
			<Container>
				<section className='showcase'>
					{movies.results && movies.results.length === 0 && (
						<h1 className='error'>Result not found!!!</h1>
					)}
					{isLoading ? (
						movies.results &&
						movies.results.slice(10).map((movieItem: any) => 
							<MovieItem key={uuidv4()} movieItem={movieItem} />
						)
					) : (
						<Spinner />
					)}
				</section>
			</Container>
		</>
	);
};

export default Movies;
