import React from "react";

import Header from "./../Header/Header";
import MenuBar from "./../MenuBar/MenuBar";
import { Link } from 'react-router-dom';
// import './styles.css';

class UserSetting extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Home", link: "/UserHome", on: false},
			{ num:1, menu: "World", link: "/UserAccount", on: false },
			{ num:2, menu: "Profile", link: "/UserProfile", on: false },
			{ num:3, menu: "Setting", link: "/UserSetting", on: true }				
		],
		userName: this.props.name,
		userEmail: this.props.email
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
					<Link to='/Login'>
					<button className='logoutbtn'> 
						Logout
					</button>		
					</Link>							
					<Header
			          title="Profile"
			        />						       
			        <div className='outline'>
			        	<div className='infoBox'>
			        		<div className='infoTitle'>
			        			Email subscription
			        		</div>
			        		<div className='infoContent'>
			        			checkbox
			        		</div>
			        	</div>
			        </div>
				</div>	
			</div>		
		);
	}
}

export default UserSetting;
