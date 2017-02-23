import React, { Component } from 'react';
import './App.css';
import SinglePost from './SinglePost.js'

class Listing extends Component {
  	render() {
		let testPost = this.props.data.data.children[1].data;
		console.log(testPost);
    	return (
      		<div className="reddit-list">
				<SinglePost post={testPost} />
      		</div>
    	);
  	}
}

Listing.propTyeps = {
	data: React.PropTypes.object.isRequired,
}


export default Listing;
