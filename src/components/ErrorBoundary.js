import React from 'react';

const logErrorToMyService = (error, info) => {
	console.log(error, info);
};

class EB extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return this.setState({
			hasError: true,
		});
	}

	componentDidCatch(error, info) {
		// You can also log the error to an error reporting service
		this.setState({
			error: error,
			errorInfo: info,
		});
		logErrorToMyService(error, info);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div>
					<h2>Something went wrong.</h2>
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</details>
				</div>
			);
		}

		return this.props.children;
	}
}

export default EB;
