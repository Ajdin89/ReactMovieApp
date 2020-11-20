import React, { useContext } from 'react';
import { AppContext } from '../../../Context/MovieContext';

const Search = (): JSX.Element => {
	const { search, setSearch } = useContext(AppContext);

	return (
		<div className='input-wrap'>
			<form>
				<input
					type='text'
					placeholder='Search...'
					autoComplete='off'
					className='search'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default Search;
