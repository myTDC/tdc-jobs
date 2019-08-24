import React, { memo } from 'react';
import PropTypes from 'prop-types';

const MarketingForm = memo(function MarketingForm(props) {
	return (
		<div>
			I show the forms of marketing.
			<br />I ask for sample pages and sales reports.
		</div>
	);
});

MarketingForm.propTypes = {
	user: PropTypes.object,
};

export default MarketingForm;
