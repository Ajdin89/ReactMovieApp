import React from 'react';

const Container = ({children}: any): JSX.Element => {
	return (
		<div className='container'>
      {children}
		</div>
	);
};

export default Container;
