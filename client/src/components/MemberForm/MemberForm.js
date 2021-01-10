import React from "react";
import './styles.css';
import MemberList from "./../MemberList/MemberList";
import Input from "./../Input/Input";

class MemberForm extends React.Component {
	state = {
		memberToAdd: "",
		memberToRemove: "",
		memberToBan: "",
		memberToFree: "",
		members: [
			'Cryvosh', 'Thomas', 'Sangwoo', 'John', 'Mark', 'David'
		],
		bans: [
			'Nunu', 'Trundle', 'Miss Fortune', 'Graves'
		]
	}

	addMember = () => {
		const memberList = this.state.members
		const memberToAdd = this.state.memberToAdd

		memberList.push(memberToAdd);
		this.setState({
			members: memberList
		})
	}

	addBan = () => {
		const banList = this.state.bans
		const memberToBan = this.state.memberToBan

		banList.push(memberToBan);
		this.setState({
			bans: banList
		})
	}

	removeMember = () => {
		const memberList = this.state.members
		const memberToRemove = this.state.memberToRemove

		const filtered = memberList.filter(m => {
			return m !== memberToRemove
		})
		this.setState({
			members: filtered
		});
	}

	removeBan = () => {
		const banList = this.state.bans
		const memberToFree = this.state.memberToFree

		const filteredBan = banList.filter(m => {
			return m !== memberToFree
		})
		this.setState({
			bans: filteredBan
		});
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
			<div className='mainBox'>
				<div className='bigBox'>					
					<div className='box'>
						Members
					</div>				
					<div className='memberList'>
						Member list
						<MemberList members={this.state.members}/>
					</div>	
					<Input 
						name="memberToAdd"
						value= { this.state.memberToAdd }
						label="Invite member"
						inputPlaceholder="Write user ID"
						description="Invite a person as a member of your world."
						onChange={ this.handleInputChange }
					/>
					<div className='memberBtnContainer'>
						<button className='memberBtn' onClick={ this.addMember }>
							Add member
						</button>
					</div>
					<Input 
						name="memberToRemove"
						value= { this.state.memberToRemove }
						label="Remove member"
						inputPlaceholder="Write user ID"
						description="Remove a member from a member list of your world."
						onChange={ this.handleInputChange }
					/>		
					<div className='memberBtnContainer'>
						<button className='memberBtn' onClick={ this.removeMember }>
							Remove member
						</button>			
					</div>
				</div>
				<div className='bigBox'>
					<div className='box'>
						Bans
					</div>
					<div className='banList'>
						Ban list
						<MemberList members={this.state.bans} queueComponent={this} />
					</div>					
					<Input 
						name="memberToBan"
						value= { this.state.memberToBan }
						label="Ban user"
						inputPlaceholder="Write user ID"
						description="Ban user from your world. User can't visit your world anymore"
						onChange={ this.handleInputChange }
					/>
					<div className='memberBtnContainer'>
						<button className='memberBtn' onClick={ this.addBan }>
							Add member
						</button>
					</div>
					<Input 
						name="memberToFree"
						value= { this.state.memberToFree }
						label="Cancel ban"
						inputPlaceholder="Write user ID"
						description="Remove user from the ban list. User can visit your world again"
						onChange={ this.handleInputChange }
					/>
					<div className='memberBtnContainer'>
						<button className='memberBtn' onClick={ this.removeBan }>
							Remove member
						</button>
					</div>
				</div>						
			</div>
		);
	}
}

export default MemberForm;
