import React from 'react';
// import PropTypes from 'prop-types'
const backlightStyle = {
	width: '100%',
	height: '100%',
	display: 'absolute',
	top: 0,
	left: 0,
};

export const Backlight = (props) => {
	return (
		<div style={backlightStyle}>
			Hi
			<br />I make stuff black
		</div>
	);
};

Backlight.propTypes = {};

export default Backlight;
