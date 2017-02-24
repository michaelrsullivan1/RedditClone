import React from 'react';
import './Upvotes.css';

function Upvotes({ score }) {
	return (
		<div className="votes">
			<i className="fa fa-arrow-up" aria-hidden="true"></i>
			<span>{score}</span>
			<i className="fa fa-arrow-down" aria-hidden="true"></i>
		</div>
	);
}

Upvotes.propTypes = {
	score: React.PropTypes.number.isRequired,
}

export default Upvotes;
