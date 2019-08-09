import React from 'react';
import PropTypes from 'prop-types';

function MenuIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'>
			<path fill={props.color} d='M0 0h16v2H0zm8 7h16v2H8zm-5 7h16v2H3z' />
		</svg>
	);
}

MenuIcon.prototypes = {
	color: PropTypes.string,
};

MenuIcon.defaultProps = {
	color: '#010203',
};

export default MenuIcon;
