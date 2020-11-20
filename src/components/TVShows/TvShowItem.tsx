import React, { Component } from 'react';

interface AppProps {
	tvShowItem: any;
}

class TvShowItem extends Component<AppProps> {
	render(): JSX.Element {
		const { tvShowItem } = this.props;

		return (
			<div className='cards'>
				<img
					src={`https://image.tmdb.org/t/p/w400/${tvShowItem.poster_path}`}
					alt='poster'
				/>
				<div className='title-wrap'>
					<h1 className='title'>{tvShowItem.name}</h1>
				</div>
			</div>
		);
	}
}

export default TvShowItem;
