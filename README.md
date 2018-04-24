To import the multiple components into single component follow, below instructions

1) create the header component

import React from 'react';


export class Header extends React.Component{
  render(){
    return(
      
         <h1>Header Goes here</h1>
        
    )
  }
}





2) create the footer component

import React from 'react';


export class Footer extends React.Component{
  render(){
    return(
     
         <h1>footer Goes here</h1>
        
    )
  }
}





3) And dump all into index.js

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



