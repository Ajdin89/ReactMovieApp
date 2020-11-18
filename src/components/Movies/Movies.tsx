import React, { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import Container from '../Container';
import MovieItem from './MovieItem';
import { v4 as uuidv4 } from 'uuid';

const Movies = (): JSX.Element => {
	const { movies } = useContext(MovieContext);

	return (
		<>
			<Container>
				<section className='showcase'>
					{movies.results &&
						movies.results.map((movieItem: any) => (
							<MovieItem key={uuidv4()} movieItem={movieItem} />
						))}
				</section>
			</Container>
		</>
	);
};

export default Movies;
