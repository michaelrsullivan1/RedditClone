import React, { Component } from 'react';
import './SinglePost.css'
import Upvotes from './Upvotes.js'
import PostInfo from './PostInfo.js';

class SinglePost extends Component {
	render() {
		let { post } = this.props;
		return (
			<div className="single-post">
				<Upvotes score={post.score} />
				<div className="thumbnail">
					<img src={post.thumbnail} alt={post.title}/>
				</div>
				<PostInfo post={post} />
			</div>
		);
	}
}

SinglePost.propTypes = {
		post: React.PropTypes.object.isRequired,
}

export default SinglePost;
