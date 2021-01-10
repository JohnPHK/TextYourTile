import React from "react";

import Header from "./../Header/Header";
import WorldList from "./../WorldList/WorldList";
import MenuBar from "./../MenuBar/MenuBar";
import { Link } from 'react-router-dom';
import './styles.css';

class UserAccount extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Home", link: "/UserHome", on: false},
			{ num:1, menu: "World", link: "/UserAccount", on: true },
			{ num:2, menu: "Profile", link: "/UserProfile", on: false }					
		],
		userName: this.props.name,
		userEmail: this.props.email,
		worlds: [
			{ name: "World1", views: 10, likes: 5, reports: 0, isPublic: false },
			{ name: "World2", views: 100, likes: 15, reports: 0, isPublic: true },
			{ name: "World3", views: 10, likes: 5, reports: 0, isPublic: true },
			{ name: "World4", views: 100, likes: 15, reports: 0, isPublic: true },
			{ name: "World5", views: 10, likes: 5, reports: 0, isPublic: true }		
		]
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
			          title={ this.state.userName+ "'s Worlds" }		         
			        />						       
			        <WorldList style worlds={ this.state.worlds } />		        
			        <div className='btnContainer'>			    				        		         
					    <Link to={'/CreateWorld'}>		        	
					    	<button className='createBtn'> 		        
					    		Create World
					    	</button>
					    </Link>		        
				    </div>
				</div>	
			</div>		
		);
	}
}

export default UserAccount;
