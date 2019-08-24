import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const NavLink = memo(function NavLink(props) {
	const { color = '#FF1744', colorDark = '#FF1744' } = props
	const styleNav = {
		width: 'max-content',
		padding: '0 2px',
		fontWeight: `600`,
		borderBottom: `solid 4px ${color}`,
		boxShadow: `inset 0 -3px 0 ${color}`
	};

	const styleDrawer = {
		width: 'min-content',
		fontWeight: `700`,
		color: `${colorDark}`,
		// textTransform: 'uppercase',
		boxShadow: `inset 0 -5px 0 ${color}`
	};

	return (
		<Link
			{...props}
			getProps={({ isCurrent }) => {
				// the object returned here is passed to the anchor element's props
				// console.log(innerprops);
				if (isCurrent && props.source === 'nav') {
					return {
						style: { ...styleNav },
					};
				} else if (isCurrent && props.source === 'drawer') {
					return {
						style: { ...styleDrawer },
					};
				}
			}}
		/>
	);
});

NavLink.propTypes = {
	color: PropTypes.string,
	colorDark: PropTypes.string,
	source: PropTypes.string,
};

NavLink.defaultProps = {
	color: '#69f0ae',
	colorDark: '#16df84',
	source: 'nav',
};

export default NavLink;
