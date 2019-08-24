import React from 'react';
import PropTypes from 'prop-types';
// import Backlight from './Backlight';

import './drawer.css';
import NavLink from '../navigation/NavLink';
import JobsLogo from '../../res/jsx/JobsLogo';

export const Backlight = (props) => {
	return (
		<div className='backlight' {...props}>
			Hi
			<br />I make stuff black
		</div>
	);
};

Backlight.propTypes = {};

export const Drawer = (props) => {
	const { routes, toggleDrawer } = props;
	return (
		<div className='drawer'>
			<JobsLogo
				className='drawerLogo'
				alt='🗲 Logo of TDC Jobs 🗲'
				onClick={toggleDrawer} //() => alert('An image was clicked')
			/>
			<section className='drawerNavLinkContainer drawerSectionDivider'>
				{routes &&
					routes.map((route) => (
						<NavLink key={route.path} to={route.path} source='drawer' className='drawerLink'>
							{route.name}
						</NavLink>
					))}
			</section>
			<div className='spacer'> </div>
			<section className='drawerFooter drawerSectionDivider'>I have the drawer footer</section>
		</div>
	);
};

Drawer.propTypes = {};

const DrawerContainer = (props) => {
	return (
		<div className='drawerContainer'>
			<Backlight onClick={props.toggleDrawer} />
			<Drawer {...props} />
		</div>
	);
};

DrawerContainer.propTypes = {
	isOpen: PropTypes.bool,
	hasType: PropTypes.string,
};

export default DrawerContainer;
