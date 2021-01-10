import React from "react";

import Header from "./../Header/Header";
import MemberForm from "./../MemberForm/MemberForm";
import MenuBar from "./../MenuBar/MenuBar";
import { Link } from 'react-router-dom';
import './styles.css';

class MemberSetting extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Setting", link: "/WorldSetting", on: false },
			{ num:1, menu: "Members and Bans", link: "/MemberSetting", on: true }			
		],
		worldName: "World 1"
	}

	handleDelete = event => {
		alert('Do you really want to delete this world?')
		event.preventDefault();
	};

	render() {	

		return(
			<div className='firstBox'>							
				<div className='columnFirst'>
					<MenuBar 
						name={ this.state.worldName }						
						menuList={ this.state.menuList }
					/>
				</div>
				<div className='columnSecond'>			
					<div>
						<Header 
							title="Change the setting of world"
							subtitle="World Name"
						/>				
						<MemberForm					
						/>
						<div className='mainBox'>													
							</div>	
							<div className='settingBtnContainer'>			
								<Link to={'/UserAccount'}>		        	
						        	<button className='goBackBtn'>		        
						        		Back to your worlds
						        	</button>
						        </Link>	
					        </div>		        		     			        														
					</div>			
				</div>					
			</div>

		);
	}
}

export default MemberSetting;