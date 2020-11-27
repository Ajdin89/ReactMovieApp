import React from 'react';
import axios from 'axios';
import { History } from 'history';
import { API_KEY } from '../../Context/MovieContext';
import Container from '../Container';
import Spinner from '../Spinner';
import VideoSlider from '../VideoSlider';

export interface IState {
	name: string;
	isLoading: boolean;
	poster_path: string;
	overview: string;
	videos: [];
	isLoadingVideo: boolean;
}

export interface IProps {
	match: {
		params: {
			id: string;
		};
	};
	history: History;
}

class TvShowItemDetail extends React.Component<IProps, IState> {
	state: IState = {
		name: '',
		poster_path: '',
		overview: '',
		isLoading: true,
		videos: [],
		isLoadingVideo: true,
	};
	
	componentDidMount() {
		const { id } = this.props.match.params;

		const fetchTvDetail = async () => {
			const response = await axios(
				`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
			);
			// console.log(response.data);
			this.setState({ ...response.data, isLoading: false });
		};

		const fetchTvVideos = async () => {
			const response = await axios(
				`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`
			);
			// console.log(response.data);
			this.setState({ videos: response.data.results, isLoadingVideo: false });
		};

		fetchTvVideos();
		fetchTvDetail();
	}
	goBack = () => this.props.history.goBack();

	render() {
		const {
			name,
			poster_path,
			overview,
			isLoading,
			videos,
			isLoadingVideo,
		} = this.state;

		const videoShow =
			videos.length > 0 && !isLoadingVideo ? (
				<VideoSlider items={videos} />
			) : (
				<img
					src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
					alt='poster'
				/>
			);

		return (
			<Container>
				<div className='item-wrapper'>
					<button className='back' onClick={this.goBack}>
						<i className='fas fa-angle-left'></i> Back
					</button>
					{isLoading ? (
						<Spinner />
					) : (
						<div className='item-details'>
							{videoShow}
							<h2 className='header'>{name}</h2>
							<p className='overview'>OVERVIEW: {overview}</p>
						</div>
					)}
				</div>
			</Container>
		);
	}
}

export default TvShowItemDetail;
