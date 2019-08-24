import React, { Suspense, lazy, memo } from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import Page404 from './Page404';

const MarketingForm = lazy(() => import('../forms/Marketing'));
const InternshipForm = lazy(() => import('../forms/Intern'));

const profileRoutes = {
	Intern: { name: 'Intern', path: '/' },
	Developer: { name: 'Developer', path: ':developer' },
	Marketing: { name: 'Marketing', path: ':marketing' },
	Sales: { name: 'Sales', path: ':sales' },
	Graphics: { name: 'graphics', path: ':graphics', requiresAuth: true },
};

const ProfileBuilder = memo(function ProfileBuilder(props) {
	console.log(props);
	return (
		<div>
			<h1>Let's make an awesome profile for you!</h1>
			<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
				<Router className='profile-Forms-container'>
					<InternshipForm path={profileRoutes.Intern.path} /> 
					<MarketingForm path={profileRoutes.Marketing.path} />
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
