import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import '../styles/Landing.css';
import searchIcon from '../res/icons/ic_search_black_24px.svg';
import { navigate } from '@reach/router';

const Landing = (props) => {
	const [searchString, setsearchString] = useState('');

	function handleSubmit(event) {
		alert('A name was submitted: ' + searchString);
		event.preventDefault();
		setsearchString(event.target.elements[0].value);
		// const id = event.target.elements[0].value;
		event.target.reset();

		// pretend like we saved a record to the DB here
		// and then we navigate imperatively
		navigate(`/profile-builder/${searchString}`);
	}

	return (
		<div className='landingContainer'>
			<h1>I am the landing page</h1>
			<br />I have lists of interesting stuff
			<br /> and you can search it.
			<form onSubmit={handleSubmit} className='landingForm'>
				<div className='landingInputMainContainer'>
					<input
						className='landingInputMain'
						value={searchString}
						onChange={(e) => setsearchString(e.target.value)}
						name='Search'
						type='search'
						placeholder='What are you good at?'
						required
					/>
					<img
						className='landingformButton'
						src={searchIcon}
						alt='Button for Primary Job Search'
						role='button'
						type='submit'
					/>
				</div>
				<aside className='landingInputHelper'>
					eg. Marketing, Sales, HR, Operations, Python, Java, Android
				</aside>
			</form>
		</div>
	);
};

// Landing.propTypes = {};

export default Landing;
