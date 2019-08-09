import React, { Suspense, lazy, memo } from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import Page404 from './Page404';

const Landing = lazy(() => import('./Landing'));

const profileRoutes = {
	Developer: { name: 'Home', path: '/' },
	Marketing: { name: 'Marketing', path: '/:Marketing' },
	Sales: { name: 'Learn', path: '/start-learning' },
	Graphics: { name: 'Dash', path: '/dash/', requiresAuth: true },
};

const ProfileBuilder = memo(function ProfileBuilder(props) {
	console.log(props);
	return (
		<div>
			<h1>Let's make a awesome profile for you!</h1>
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<Router className='profile-Forms-container'>
					<Landing path={profileRoutes.Marketing.path} />
					{/* <Learn path={profileRoutes.Learn.path} />
					<Dashboard path={profileRoutes.Dash.path} /> */}
					<Page404 default />
				</Router>
			</Suspense>
		</div>
	);
});

ProfileBuilder.propTypes = {
	path: PropTypes.string,
};

export default ProfileBuilder;
