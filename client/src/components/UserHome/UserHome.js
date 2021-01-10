import React from "react";

import Header from "./../Header/Header";
import MenuBar from "./../MenuBar/MenuBar";
import { Link } from 'react-router-dom';
import '../styles.css';

class UserHome extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Home", link: "/UserHome", on: true},
			{ num:1, menu: "World", link: "/UserAccount", on: false },
			{ num:2, menu: "Profile", link: "/UserProfile", on: false }			
		],
		userName: this.props.name,
		userEmail: this.props.email,
	};

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
					<Link to="/">
         		 		<button className="backBtn">
         		 			Back to Public Canvas
         		 		</button> 
         		 	</Link>		
					<Link to='/Login'>
					<button className='userLogOutBtn'> 
						Logout
					</button>		
					</Link>							
					<Header
			          title={ this.state.userName+ "'s Homepage" }		         
			        />						       
			        <div className='outline'>
			        Welcome to our website!! You can write whatever you want with our website. 
			        </div>
				</div>	
			</div>		
		);
	}
}

export default UserHome;
