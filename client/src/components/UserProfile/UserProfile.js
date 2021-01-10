import React from "react";

import Header from "./../Header/Header";
import MenuBar from "./../MenuBar/MenuBar";
import UserInfo from "./../UserInfo/UserInfo";
import { Link } from 'react-router-dom';
import './styles.css';

class UserProfile extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Home", link: "/UserHome", on: false},
			{ num:1, menu: "World", link: "/UserAccount", on: false },
			{ num:2, menu: "Profile", link: "/UserProfile", on: true }				
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
			          title="Profile"
			        />						       
			        <div className='outline'>
			        	<UserInfo 
			        		title="User Name"
			        		content={ this.state.userName }
			        	/>
			        	<UserInfo 
			        		title="User Email"
			        		content={ this.state.userEmail }
			        	/>
			        	<div className='infoBox'>
			        		<div className='infoTitle'>
			        			User Password
			        		</div>
			        		<div className='infoContent'>
			        			<Link to='/PasswordChange'>			        			
			        			<button className='changePass'>
					        		Change Password
					        	</button>
					        	</Link>
			        		</div>
			        	</div>			        	
			        	<div className='infoBox'>
			        		<div className='infoTitle'>
			        			Profile Picture
			        		</div>
			        		<div className='infoContent'>
			        			<button className='changePass'>
					        		Change Picture
					        	</button>
			        		</div>
			        	</div>			        	
			        </div>
				</div>	
			</div>		
		);
	}
}

export default UserProfile;
