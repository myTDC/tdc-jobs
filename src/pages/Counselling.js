import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Counselling = memo(function Counselling(props) {
	console.log(props);
	return (
		<div>
			I show up for Counselling
			<br />
			And i get stuff done!
		</div>
	);
});

Counselling.propTypes = {
	path: PropTypes.string,
};

export default Counselling;
