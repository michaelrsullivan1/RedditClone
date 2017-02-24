import React from 'react';
import moment from 'moment';

function PostInfo({ post }) {
	let perm = `http://www.reddit.com${post.permalink}`;
	let time = moment().utc(post.created_utc).fromNow();
	console.log(time);
	return (
		<div className="post-info">
			<div className="info-top">
				<p className="title"><a href={perm} target="_blank">{post.title}</a><span className="domain">{post.domain}</span></p>
			</div>
			<div className="info-middle">
				<p>Submitted {time} by {post.author}</p>
			</div>
			<div className="info-bottom">
				<p>
					<span>{post.num_comments}</span>
					<span>store</span>
					<span>save</span>
					<span>hide</span>
					<span>report</span>
					<span>pocket</span>
				</p>
			</div>
		</div>
	);
}

PostInfo.propTypes = {
	post: React.PropTypes.object.isRequired,
}

export default PostInfo;
