import React from 'react';
import PropTypes from 'prop-types';
// import Backlight from './Backlight';

import './drawer.css';
import NavLink from '../NavLink';
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
		<section className='drawer'>
			<JobsLogo
				className='drawerLogo'
				alt='🗲 Logo of TDC Jobs 🗲'
				onClick={toggleDrawer} //() => alert('An image was clicked')
			/>
			<div className='drawerNavLinkContainer'>
				{routes &&
					routes.map((route) => (
						<NavLink key={route.path} to={route.path} source='drawer' className='drawerLink'>
							{route.name}
						</NavLink>
					))}
			</div>
		</section>
	);
};

Drawer.propTypes = {};

const DrawerContainer = (props) => {
	const { toggleDrawer } = props;
	// const [isOpen, toggleisOpen] = useState(true);

	return (
		<div className='drawerContainer'>
			<Backlight onClick={toggleDrawer} />
			<Drawer {...props} />
		</div>
	);
};

DrawerContainer.propTypes = {
	isOpen: PropTypes.bool,
	hasType: PropTypes.string,
};

export default DrawerContainer;
