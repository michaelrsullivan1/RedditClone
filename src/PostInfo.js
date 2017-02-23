import React from 'react';

function PostInfo({ post }) {
	return (
		<p>Test Post Info</p>
	);
}

PostInfo.propTypes = {
	post: React.PropTypes.object.isRequired,
}

export default PostInfo;
