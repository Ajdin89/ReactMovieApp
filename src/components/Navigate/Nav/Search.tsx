import React, { useContext } from 'react';
import { AppContext } from '../../../Context/MovieContext';

const Search = (): JSX.Element => {
	const { search, setSearch, getValue } = useContext(AppContext);

	const handleChange = (value: string) => {
		setSearch(value);
		getValue(value);
	};

	return (
		<>
			<form>
				<div className='input-wrap'>
					<i className='fas fa-search'></i>
					<input
						type='text'
						placeholder='Search...'
						autoComplete='off'
						value={search}
						onChange={(e) => handleChange(e.target.value)}
					/>
				</div>
			</form>
		</>
	);
};

export default Search;
