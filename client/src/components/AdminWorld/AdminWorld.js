import React from "react";

import Header from "./../Header/Header";
import MenuBar from "./../MenuBar/MenuBar";
import AdminWorldList from "./../AdminWorldList/AdminWorldList";
import { Link } from 'react-router-dom';

class AdminWorld extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Home", link: "/AdminHome", on: false},
			{ num:1, menu: "Users", link: "/AdminUsers", on: false },
			{ num:2, menu: "Worlds", link: "/AdminWorld", on: true }		
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
			          title="List of Users"
			        />						       
			        <div className='outline'>
			        <AdminWorldList/>
			        </div>
				</div>	
			</div>		
		);
	}
}

export default AdminWorld;