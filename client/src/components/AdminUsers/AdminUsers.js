import React from "react";

import Header from "./../Header/Header";
import MenuBar from "./../MenuBar/MenuBar";
import AdminUserList from "./../AdminUserList/AdminUserList";
import { Link } from 'react-router-dom';

// import './styles.css';

class AdminUsers extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Home", link: "/AdminHome", on: false},
			{ num:1, menu: "Users", link: "/AdminUsers", on: true },
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
			          title="List of Users"
			        />						       
			        <div className='outline'>
			        <AdminUserList/>
			        </div>
				</div>	
			</div>		
		);
	}
}

export default AdminUsers;