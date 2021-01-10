import React from "react";

import Header from "./../Header/Header";
import MenuBar from "./../MenuBar/MenuBar";
import Input from "./../Input/Input";
import { Link } from 'react-router-dom';
import './styles.css';

class PasswordChange extends React.Component {

	state = {
		currentPswd: "",
		menuList: [
			{ num:0, menu: "Home", link: "/UserHome", on: false},
			{ num:1, menu: "World", link: "/UserAccount", on: false },
			{ num:2, menu: "Profile", link: "/UserProfile", on: true }				
		],
		userName: "John Doe",
		userEmail: "John.Doe@mail.utoronto.ca",
		userPassword: "abc",
		newPass: "",
		conPass: ""
	};

	handleInputChange = event => {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;
	    
	    this.setState({
	     	[name]: value 
	    });
	};

	handleClick = event => {	
		const curPassword = this.state.currentPswd;
		const newPassword = this.state.newPass;
		const confirmPassword = this.state.conPass;	
		if(curPassword === this.state.userPassword && newPassword === confirmPassword) {
			this.setState({
				userPassword: curPassword
			})
		}
	}

	render() {
		return (	
			<div className='firstBox'>								
				<div className='columnFirst'>
					<MenuBar 
						name={ this.state.userName }					
						menuList={ this.state.menuList }
					/>
				</div>
				<div className='columnSecond'>															
					<Header
			          title="Change Password"
			        />						       
			        <div className='outline'>
						<Input
						name="currentPswd"
						value={ this.state.currentPswd }
						label="Old Password"
						inputPlaceholder="Write old password."
						description=""
						onChange= {this.handleInputChange }
						type="password"
						/>    	 
			        	<Input 
						name="newPass"					
						value={ this.state.newPass }
						label="Change Password"
						inputPlaceholder="Write new password"
						description="Write your new password."
						onChange= { this.handleInputChange }
						type="password"				
						/>
						<Input
						name="conPass"
						value={ this.state.conPass }
						label={"Confirm Password"}
						inputPlaceholder="Confirm password"
						description={""}
						onChange= {this.handleInputChange}
						type="password"
						/>

						<div className='changeBtnContainer'>
						<Link to='/UserProfile'>
				        <button className='changeBtn' onClick={ this.handleClick }>
				        	Change
				        </button>
				        </Link>						        
				        <Link to='/UserProfile'>
				        <button className='changeBtn'>
				        	Cancel
				        </button>
				        </Link>
				        </div>				        
			        </div>			        			        	       
				</div>	
			</div>		
		);
	}
}

export default PasswordChange;