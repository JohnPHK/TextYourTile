import React from "react";

import Header from "./../Header/Header";
import MenuBar from "./../MenuBar/MenuBar";
import { Link } from 'react-router-dom';

class AdminHome extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Home", link: "/AdminHome", on: true},
			{ num:1, menu: "Users", link: "/AdminUsers", on: false },
			{ num:2, menu: "Worlds", link: "/AdminWorld", on: false }		
		],
		userName: "Admin",
		userEmail: "admin@mail.utoronto.ca",
		userPassword: "admin",		
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
					<button className='userLogOutBtn'> 
						Logout
					</button>		
					</Link>							
					<Header
			          title={ this.state.userName+ "'s Homepage" }		         
			        />						       
			        <div className='outline'>
			         Your task is manage users account. Ban user who got many reports.
			        </div>
				</div>	
			</div>		
		);
	}
}

export default AdminHome;