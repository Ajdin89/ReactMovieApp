import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IState {
	search: string;
	setSearch(param: string): void;
	activeLink: string;
	setActiveLink: (param: string) => void;
	movies: any;
	setMovies: (param: []) => void;
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
};

export const MovieContext = React.createContext<IState>(initialState);

const API_KEY = 'bf3b531aa8e1cfd8643d5a0e2982da5d';

export const MovieState: React.FC<Props> = ({ children }: any) => {
	const [search, setSearch] = useState('');
	const [activeLink, setActiveLink] = useState('Movies');
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const response: any = await axios(
				`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
			);
			console.log(response.data.results);
			setMovies(response.data);
		};
		getMovies();
	}, []);

	return (
		<MovieContext.Provider
			value={{
				search,
				setSearch,
				activeLink,
				setActiveLink,
				movies,
				setMovies,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};
