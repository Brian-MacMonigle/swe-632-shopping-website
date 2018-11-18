import React from 'react';
import { Link } from 'react-router-dom';

const LinkWrapper = (props) => (
	<Link to={props.to}>
		{props.children}
	</Link>
);

export default LinkWrapper;