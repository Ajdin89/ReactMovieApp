import React from 'react';

const MovieItem = ({ movieItem }: any): JSX.Element => {
	return (
		<div className='movie-cards'>
			<img
				src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
				alt='poster'
			/>
			<h1 className='movie-title'>{movieItem.title}</h1>
		</div>
	);
};

export default MovieItem;
