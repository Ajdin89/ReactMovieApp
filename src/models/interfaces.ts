// import { NumberLiteralType } from "typescript";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Props {
	children?: React.ReactNode;
}

export interface IState {
	search: string;
	setSearch(param: string): void;
	movies: any;
	setMovies: (param: []) => void;
	isLoading: boolean;
	setIsLoading: (param: boolean) => void;
	tvShows: any;
	setTvShows: (param: []) => void;
	value: string;
	setValue: (param: string) => void;
	getValue: (param: string) => void;
}

