import React, { useContext } from 'react';
import { MovieContext } from '../../../Context/MovieContext';
// import React, { useState } from 'react';

const Search = (): JSX.Element => {
	const { search, setSearch } = useContext(MovieContext);
	// const [input, setInput] = useState('');

	return (
		<div className="input-wrapp">
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
