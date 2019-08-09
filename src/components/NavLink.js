import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const NavLink = (props) => {
	return (
		<Link
			{...props}
			getProps={(innerprops) => {
				// the object returned here is passed to the
				// anchor element's props
				// console.log(innerprops);
				return {
					style: {
						borderBottom:
							props.source === 'nav' ? innerprops.isCurrent && `solid 3px #16df84` : null,
						fontWeight: props.source === 'drawer' ? innerprops.isCurrent && `bold` : null,
						width: 'width: min-content',
					},
				};
			}}
		/>
	);
};

NavLink.propTypes = {
	color: PropTypes.string,
	source: PropTypes.string,
};

NavLink.defaultProps = {
	color: '#16df84',
	source: 'nav',
};

export default NavLink;
