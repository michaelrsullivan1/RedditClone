import React, { Component } from 'react';
import './App.css';
import SinglePost from './SinglePost.js'

class Listing extends Component {
  	render() {
		let data = this.props.data.data.children;
		let testPost = this.props.data.data.children[2].data;
		console.log(testPost);

    	return (
      		<div className="reddit-list">
			<div>
			{data.map(post => 
				<SinglePost post={post.data} key={post.data.id}/>
			)}
			</div>
      		</div>
    	);
  	}
}

Listing.propTyeps = {
	data: React.PropTypes.object.isRequired,
}


export default Listing;
