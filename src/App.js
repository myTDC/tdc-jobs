import React, { lazy, Suspense, useState } from 'react';
// import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
// import { useDispatch } from 'react-redux';
import './styles/App.css';

import Navbar from './components/NavBar';
import { useWindowWidth } from './shared/commonHooks';
import Drawer from './components/drawer/Drawer';

//Lazily Loaded Route Components
const Landing = lazy(() => import('./pages/Landing'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Learn = lazy(() => import('./pages/Learn'));
const Counselling = lazy(() => import('./pages/Counselling'));
const ProfileBuilder = lazy(() => import('./pages/ProfileBuilder'));
const Page404 = lazy(() => import('./pages/Page404'));

//################################# Routes ################################
const displayRoutes = {
	Home: { name: 'Home', path: '/' },
	Counselling: { name: 'Counselling', path: '/get-counsel' },
	Learn: { name: 'Learn', path: '/start-learning' },
	Dash: { name: 'Dash', path: '/dash/', requiresAuth: true },
};

const systemRoutes = {
	Login: { name: 'Login', path: '/log-in' },
	Logout: { name: 'Log Out', path: '/log-out' },
	Jobs: { name: 'Jobs', path: '/jobs' },
	Apply: { name: 'Apply', path: '/apply-now' },
	Feedback: { name: 'Feedback', path: '/feedback/' },
	ProfileBuilder: { name: 'ProfileBuilder', path: '/profile-builder/:typeId', requiresAuth: true },
};
//################################# End of Routes ################################

function App() {
	const isMobile = useWindowWidth('mobile');
	const [isDrawerOpen, toggleisDrawerOpen] = useState(false);

	const handleDrawerToggle = () => {
		toggleisDrawerOpen(!isDrawerOpen);
	};
	// const [windWidth, isMobile] = useWindowWidth();
	return (
		<div className='App-container'>
			<Helmet>
				<title>Works Home</title>
				<meta name='description' content='Homepage of the companion App for TDC Workshops' />
				<meta name='theme-color' content='#008f68' />
			</Helmet>
			<Navbar
				isMobile={isMobile}
				routes={Object.values(displayRoutes)}
				toggleDrawer={handleDrawerToggle}
			/>
			{isDrawerOpen && (
				<Drawer
					routes={Object.values(displayRoutes)}
					toggleDrawer={handleDrawerToggle}
					isOpen={isDrawerOpen}
				/>
			)}

			<div className='App'>
				<Suspense delayMs='50' fallback={<div>Loading the cool stuff... </div>}>
					<Router className='Pages-container'>
						<Landing path={displayRoutes.Home.path} />
						<Learn path={displayRoutes.Learn.path} />
						<Dashboard path={displayRoutes.Dash.path} />
						<Counselling path={displayRoutes.Counselling.path} />
						<ProfileBuilder path={systemRoutes.ProfileBuilder.path} />
						{/* <Learn path='/works' />
					<Learn path='/learn' />
					<Build path={routes.Build.path} />
					<Build path='/build' />
					
					<Dashboard path='/me/*' />
					<Dashboard path='/user/*' />
					<Tdc path='/tdc' />
					<Toolkit path='/toolkit/*' width={windWidth} isMobile={isMobile} />
					<Feedback path='/feedback/*' />
					<Studio path={routes.Studio.path} />
					<GenericForm path='collab/:id/:id' /> */}
						<Page404 default />
					</Router>
				</Suspense>
			</div>
		</div>
	);
}

export default App;
