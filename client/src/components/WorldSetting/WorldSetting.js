import React from "react";

import Header from "./../Header/Header";
import WorldForm from "./../WorldForm/worldForm";
import MenuBar from "./../MenuBar/MenuBar";
import { Link } from 'react-router-dom';
import './styles.css';

class worldSetting extends React.Component {

	state = {
		menuList: [
			{ num:0, menu: "Setting", link: "/WorldSetting", on: true },
			{ num:1, menu: "Members and Bans", link: "/MemberSetting", on: false }			
		],
		color: "",
		type: "",
		writer: "",
		maker: "",
		dragger: "",
		worldName: "",
		worldSetting: { name: "World 1", color: "Black", dragger: "Everyone", writer: "Everyone", 
		type: "Public", maker:"Everyone"}
	}

	handleDelete = event => {
		alert('Do you really want to delete this world?')
		event.preventDefault();
	};

	handleClick = event => {	
		const currentWorld = this.state.worldSetting
		currentWorld.name = this.state.worldName
		currentWorld.color = this.state.color
		currentWorld.dragger = this.state.dragger
		currentWorld.writer = this.state.writer
		currentWorld.type = this.state.type
		currentWorld.maker = this.state.maker			
		this.setState({
			[worldSetting]: currentWorld
		})
	}

	handleInputChange = event => {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;
	    
	    this.setState({
	     	[name]: value 
	    });
	};

	render() {			
		return(
			<div className='firstBox'>							
				<div className='columnFirst'>
					<MenuBar 
						name={ this.state.worldSetting.name }						
						menuList={ this.state.menuList }
					/>
				</div>
				<div className='columnSecond'>						
					<div>
						<Header 
							title="Change the setting of world"
							subtitle={ this.state.worldSetting.name }
						/>				
						<WorldForm	
							worldName={ this.state.worldName }				
							color={ this.state.color }
							writer={ this.state.writer }
							dragger={ this.state.dragger }
							maker={ this.state.maker }
							type={ this.state.type }
							onChange={ this.handleInputChange }
						/>
						<div className='mainBox'>
							<div className='bigBox'>
								<div className='box'>
									Delete World
								</div>	
								<button className='deleteBtn' onClick={ this.handleDelete }>
									Delete World
								</button>

							</div>	
							<div className='settingBtnContainer'>			
								<Link to={'/UserAccount'}>
						        	<button className='settingBtn' onClick={ this.handleClick }>		        
						        		Change
						        	</button>
						        </Link>
					        </div>		        		     
			        		<div className='settingBtnContainer'>			
						        <Link to={'/UserAccount'}>		        	
						        	<button className='settingBtn'>		        
						        		Cancel
						        	</button>
						        </Link>	
							</div>									
						</div>
					</div>			
				</div>					
			</div>

		);
	}
}

export default worldSetting;