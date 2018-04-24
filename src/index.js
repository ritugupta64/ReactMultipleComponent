import React from 'react';
import {render} from 'react-dom';
import {Header} from './header';
import {Footer} from './footer';
import './index.css';

class App extends React.Component{
	render(){
		return(
<div className="container">
	<div className="row">
		<div className="col-xs-12">
			<Header/>
		</div>
	</div>
	<div className="row">
		<div className="col-xs-12">
			<h1>This is the first component along with multiple component</h1>
		</div>
	</div>
    <div className="row">
	  <div className="col-xs-12">
		<Footer/>
	 </div>	
	</div>
</div>
		)
	}
}

render(<App />, document.getElementById('root'));

