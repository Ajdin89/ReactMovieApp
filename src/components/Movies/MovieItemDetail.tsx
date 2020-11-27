import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../../Context/MovieContext';
import Container from '../Container';
import Spinner from '../Spinner';
import VideoSlider from '../VideoSlider';

const MovieItemDetail = () => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();

	const [movieItemDetails, setMovieItemDetails] = useState({
		title: '',
		release_date: '',
		poster_path: '',
		overview: '',
	});
	const [isLoading, setIsLoading] = useState(true);
	const [videos, setVideos] = useState([]);
	const [isLoadingMovies, setIsLoadingMovies] = useState(true);

	// Fetch MovieItemDetail data
	useEffect(() => {
		const fetchMovieDetail = async () => {
			const response: any = await axios(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
			);

			// console.log(response.data);
			setMovieItemDetails(response.data);
			setIsLoading(false);
		};

		const fetchMovieVideos = async () => {
			const response: any = await axios(
				`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
			);

			// console.log(response.data);
			setIsLoadingMovies(false);
			setVideos(response.data.results);
		};

		fetchMovieDetail();
		fetchMovieVideos();
	}, [id]);
	
console.log(videos);

	const goBack = () => history.goBack();

	const videoShow =
		videos.length > 0 && !isLoadingMovies ? (
			<VideoSlider items={videos} />
		) : (
			<img
				src={`https://image.tmdb.org/t/p/w400/${movieItemDetails.poster_path}`}
				alt='poster'
			/>
		);

	return (
		<Container>
			<div className='item-wrapper'>
				<button className='back' onClick={goBack}>
					<i className='fas fa-angle-left'></i> Back
				</button>
				{isLoading ? (
					<Spinner />
				) : (
					<div className='item-details'>
						{videoShow}
						<h2 className='header'>
							{movieItemDetails.title}
							<span>({movieItemDetails.release_date})</span>
						</h2>
						<p className='overview'>OVERVIEW: {movieItemDetails.overview}</p>
					</div>
				)}
			</div>
		</Container>
	);
};

export default MovieItemDetail;
