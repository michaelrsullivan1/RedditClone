import React from 'react';
import moment from 'moment';

function PostInfo({ post }) {
	let perm = `http://www.reddit.com${post.permalink}`;
	let time = moment().utc(post.created_utc).fromNow();
	return (
		<div className="post-info">
			<div className="info-top">
				<p className="title"><a href={perm} target="_blank">{post.title}</a><span className="domain">({post.domain})</span></p>
			</div>
			<div className="info-middle">
				<p>Submitted {time} by <a href="#">{post.author}</a></p>
			</div>
			<div className="info-bottom">
				<p>
					<span><a href="#">{post.num_comments} comments</a></span>
					<span><a href="#">store</a></span>
					<span><a href="#">save</a></span>
					<span><a href="#">hide</a></span>
					<span><a href="#">report</a></span>
					<span><a href="#">pocket</a></span>
				</p>
			</div>
		</div>
	);
}

PostInfo.propTypes = {
	post: React.PropTypes.object.isRequired,
}

export default PostInfo;
