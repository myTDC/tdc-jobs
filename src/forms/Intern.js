import React, { memo } from 'react';
import PropTypes from 'prop-types';

const InternshipForm = memo(function InternshipForm(props) {
	return (
		<div className='profiler__intern WIP'>
			I show the form for Recruiting interns.
			<br />I ask for course details, passions and motivations.
		</div>
	);
});

InternshipForm.propTypes = {
	user: PropTypes.object,
};

export default InternshipForm;
