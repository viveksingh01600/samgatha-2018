import React,{ Component } from 'react';
import './Sponsors.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Sponsors extends Component{

	render(){

		return(

				<div className='out' >
					<div className='titext'>
						Sponsors<br/><br/>
					</div>
				<div className='sponsors'>
					<div className='con1'>
						<div><img src={require("./1.jpg")} /></div>
						<div><img src={require("./1.jpg")} /></div>
						<div><img src={require("./1.jpg")} /></div>
						<div><img src={require("./1.jpg")} /></div>
						<div><img src={require("./1.jpg")} /></div>
						<div><img src={require("./1.jpg")} /></div>
						<div><img src={require("./1.jpg")} /></div>
						<div><img src={require("./1.jpg")} /></div>

					</div>
				</div>
			</div>

			);
	}
}


export default Sponsors;
