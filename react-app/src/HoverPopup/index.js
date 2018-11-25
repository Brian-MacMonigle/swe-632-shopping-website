import React from 'react';

class HoverPopup extends React.Component {
	render() {
		return (
			<span>
				{this.props.children}
			</span>
		)
	}
}

export default HoverPopup;