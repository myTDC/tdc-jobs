import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/Landing.css';
import heroIm from '../res/backs/spacer-all-optim.svg'
// import searchIcon from '../res/icons/ic_search_black_24px.svg';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

const Landing = (props) => {
	function handleSubmit(event) {
		event.preventDefault();
		navigate(`/profiler/`); //reach router code
	}

	return (
		<div className='landingContainer'>
			<section className="landingHeroContainer">
				<img
					className='landingHeroImage'
					src={heroIm}
					alt='Button for Primary Job Search'
				/>
				<div className="landingHeroCTA">
					<p className="landingHeroCTAText">
						<span className="highlighter">venture</span> into the new world of startups
						<br />
						- with express internships
					</p>
					<button className="landingHeroCTAButton" onClick={handleSubmit}>Apply Now</button>
				</div>
			</section>
			<section className="landingIntro">
				The fastest way to learn something is to do it with high stakes.
			</section>
		</div>
	);
};

// Landing.propTypes = {};

export default Landing;

// function handleSubmit(event) {
// 	alert('A name was submitted: ' + searchString);
// 	event.preventDefault();
// 	setsearchString(event.target.elements[0].value);
// 	// const id = event.target.elements[0].value;
// 	event.target.reset();

// 	// pretend like we saved a record to the DB here
// 	// and then we navigate imperatively
// 	navigate(`/profile-builder/${searchString}`);
// }
/* <h1>I am the landing page</h1>
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

	</div>
	<aside className='landingInputHelper'>
		eg. Marketing, Sales, HR, Operations, Python, Java, Android
	</aside>
</form> */