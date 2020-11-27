import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Props, IState } from '../models/interfaces';

const initialState: IState = {
	search: '',
	setSearch: () => {},
	movies: [],
	setMovies: () => {},
	isLoading: true,
	setIsLoading: () => {},
	tvShows: [],
	setTvShows: () => {},
	value: '',
	setValue: () => {},
	getValue: () => {},
};

export const AppContext = React.createContext<IState>(initialState);

export const API_KEY = 'bf3b531aa8e1cfd8643d5a0e2982da5d';

export const MovieState: React.FC<Props> = ({ children }: any) => {
	const [search, setSearch] = useState('');
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [tvShows, setTvShows] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		// FETCH MOVIES DATA
		const getMovies = async () => {
			const response: any = await axios(
				`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${
					value
				}`
			);
			// console.log(response.data.results.slice(10));
			setMovies(response.data);
			setIsLoading(false);
		};

		// FETCH TVSHOWS DATA
		const getTvShows = async () => {
			const response: any = await axios(
				`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${
					value
				}`
			);
			// console.log(response.data.results);
			setTvShows(response.data);
			setIsLoading(false);
		};

		onFetchTvShows();
		onFetchMovies();
		getTvShows();
		getMovies();
	}, [value]);

	// FETCH TOP RATED MOVIES DATA
	const onFetchMovies = async () => {
		const response = await axios(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
		);
		setMovies(response.data);
		setIsLoading(false);
	};

	// FETCH TOP RATED TV SHOWS DATA
	const onFetchTvShows = async () => {
		const response = await axios(
			`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
		);
		setTvShows(response.data);
		setIsLoading(false);
	};

	// SET INPUT QUERY
	const getValue = (value: string) => {
		if (value.length >= 3) {
			setValue(value);
		} else {
			onFetchTvShows();
			onFetchMovies();
		}
	};

	return (
		<AppContext.Provider
			value={{
				search,
				setSearch,
				movies,
				setMovies,
				isLoading,
				setIsLoading,
				tvShows,
				setTvShows,
				value,
				setValue,
				getValue,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
