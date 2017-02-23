import React from 'react';

function Upvotes({ score }) {
	return (
		<p>Post Score: {score}</p>
	);
}

Upvotes.propTypes = {
	score: React.PropTypes.number.isRequired,
}

export default Upvotes;
