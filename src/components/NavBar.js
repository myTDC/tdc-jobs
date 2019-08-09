import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import { Link } from '@reach/router';

import JobsLogo from '../res/jsx/JobsLogo';
import '../styles/NavBar.css';
import menuIcon from '../res/icons/ic_nav_menu_24px.svg';
import userAvatar from '../res/avatars/avatar-female-tshirt.svg';
// import logo from '../res/logo/tdc-jobs-onlight.svg';

function UserProfiler(props) {
	return (
		<aside className='userProfiler'>
			<Link to='/dash/'>
				<img className='userAvatar' src={userAvatar} alt='Button to access user dashboard' />
			</Link>
		</aside>
	);
}

const Navbar = (props) => {
	const { routes, isMobile, toggleDrawer } = props;
	return (
		<header className='navContainer'>
			<div className='logoContainer'>
				<img
					className='navBarMenuIcon'
					src={menuIcon}
					onClick={toggleDrawer}
					alt='Button to toggle the navigation drawer or sidebar'
				/>

				<Link to='/'>
					<JobsLogo
						className='logo'
						alt='🗲 Logo of TDC Jobs 🗲'
						// onClick={toggleDrawer} //() => alert('An image was clicked')
					/>
				</Link>
				{isMobile ? <UserProfiler /> : null}
			</div>
			<nav className='linksContainer'>
				{routes &&
					routes.map((route) => (
						<NavLink key={route.path} to={route.path}>
							{route.name}
						</NavLink>
					))}
				{!isMobile ? <UserProfiler /> : null}
			</nav>
		</header>
	);
};

Navbar.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object),
};

export default Navbar;
