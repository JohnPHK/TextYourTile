import React from "react";
import './styles.css';
import SelectBox from "./../SelectBox/SelectBox";
import Input from "./../Input/Input";

class WorldForm extends React.Component {
	state = {			
		twoSel: [
			{
				value: 'selectOne',
				label: 'Please select one',
			},
			{
				value: 'Public',
				label: 'Public',
			},
			{
				value: 'Private',
				label: 'Private',
			}
		],
		threeSel: [
			{
				value: 'selectOne',
				label: 'Please select one',
			},
			{
				value: 'Everyone',
				label: 'Everyone',
			},
			{
				value: 'Members and Owner',
				label: 'Members and Owner',
			},
			{
				value: 'Owner',
				label: 'Owner',
			}
		]
	}

	render() {		

		const { worldName, type, writer, dragger, maker, color, onChange } = this.props;

		return(
			<div className='mainBox'>
				<div className='bigBox'>
					<div className='box'>
						World Name
					</div>	
					<Input 
						name="worldName"						
						value={ worldName }
						label="World name"
						inputPlaceholder="Write world name"
						description="Name your own world."
						onChange= { onChange }
						defaultValue="World 1"
					/>
				</div>	
				<div className='bigBox'>
					<div className='box'>
					Access
					</div>
					<SelectBox
						name="type"
						value={ type }
						label="Type of your world"
						description="Choose type of your world. If you choose public, anyone can join your world but 
						if you choose private only friends and owner can join."
						selection={this.state.twoSel}
						onChange={ onChange }
					/>
				</div>	
				<div className='bigBox'>
					<div className='box'>
					Feature
					</div>			
					<SelectBox
						name="writer"
						value={ writer }
						label="Who can be writer in your world" 				
						description="Choose who can write in your world" 
						selection={this.state.threeSel}
						onChange={ onChange }
					/>
					<SelectBox
						name="dragger"
						value={ dragger }
						label="Delete text with mouse dragging" 				
						description="Choose who can delete text in the world by dragging
						mouse" 
						selection={this.state.threeSel}
						onChange={ onChange }
					/>
					<SelectBox
						name="maker"
						value={ maker }
						label="Make member only area" 				
						description="Choose who can make member only area in the world" 
						selection={this.state.threeSel}
						onChange={ onChange }
					/>
				</div>
				<div className='bigBox'>
					<div className='box'>
						Text Style
					</div>
					<Input 
						name="color"
						value={ color }
						label="Default text color"
						inputPlaceholder="Write color code"
						description="Select default text color of your world."
						onChange={ onChange }
					/>
				</div>							
			</div>
		);
	}
}

export default WorldForm;
