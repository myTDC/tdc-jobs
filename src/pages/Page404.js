import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Page404 = (props) => {
	console.log(props);
	return (
		<div style={{ padding: '2rem' }}>
			<h4>Uh-oh seems you're lost in the expanse of TDC Universe.</h4>

			<p>
				We hear you were looking for <code>{props.uri}</code>
			</p>

			<p style={{ padding: '2rem' }}>
				If you're a developer: we've also found some information for you in the console.
			</p>

			<p>
				How about we show you the way back to the{' '}
				<Link to='/' style={{ color: '#16df84', borderBottom: 'solid 2px #16df84' }}>
					home page
				</Link>
				?
			</p>
			<p>
				or would you prefer to go back to the{' '}
				<Link to='../' style={{ color: '#16df84', borderBottom: 'solid 2px #16df84' }}>
					previous page
				</Link>
				?
			</p>
		</div>
	);
};

Page404.propTypes = {
	url: PropTypes.string,
};

export default Page404;
