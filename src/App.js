import React, { Component } from 'react';
import './App.css';
import data from './static-data.json';
import Listing from './Listing.js'

class App extends Component {

  	render() {
    	return (
      		<div className="reddit-clone">
				<Listing data={data}/>			
      		</div>
    	);
  	}
}

export default App;
