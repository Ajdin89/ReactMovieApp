import React from 'react';

const MovieItem = ({ movieItem }: any): JSX.Element => {
	return (
		<div className='cards'>
			<img
				src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
				alt='poster'
			/>
			<div className='title-wrap'>
				<h1 className='title'>{movieItem.title}</h1>
			</div>
		</div>
	);
};

export default MovieItem;
