import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IState {
	search: string;
	setSearch(param: string): void;
	activeLink: string;
	setActiveLink: (param: string) => void;
	movies: any;
	setMovies: (param: []) => void;
	isLoading: boolean;
	setIsLoading: (param: boolean) => void;
	tvShows: any;
	setTvShows: (param: []) => void;
}

interface Props {
	children?: React.ReactNode;
}

const initialState: IState = {
	search: 'string',
	setSearch: () => {},
	activeLink: 'Popular',
	setActiveLink: () => {},
	movies: [],
	setMovies: () => {},
	isLoading: false,
	setIsLoading: () => {},
	tvShows: [],
	setTvShows: () => {},
};

export const AppContext = React.createContext<IState>(initialState);

const API_KEY = 'bf3b531aa8e1cfd8643d5a0e2982da5d';

export const MovieState: React.FC<Props> = ({ children }: any) => {
	const [search, setSearch] = useState('');
	const [activeLink, setActiveLink] = useState('Movies');
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [tvShows, setTvShows] = useState([]);

	// FETCH MOVIES DATA
	useEffect(() => {
		const getMovies = async () => {
			const response: any = await axios(
				`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
			);
			// console.log(response.data.results.slice(10));
			setMovies(response.data);
			setIsLoading(true);
		};
		getMovies();
	}, []);

	// FETCH TVSHOWS DATA
	useEffect(() => {
		const getTvShows = async () => {
			const response: any = await axios(
				`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
			);
			// console.log(response.data.results);
			setTvShows(response.data);
		};
		getTvShows();
	}, []);

	return (
		<AppContext.Provider
			value={{
				search,
				setSearch,
				activeLink,
				setActiveLink,
				movies,
				setMovies,
				isLoading,
				setIsLoading,
				tvShows,
				setTvShows,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
