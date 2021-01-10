import React from 'react';
import { Link } from 'react-router-dom';
import Default_Profile from "../MenuBar/default_profile.jpg"
import './styles.css'


class BurgerMenuContent extends React.Component {
  constructor(props) {
    super(props);
    const { whichCanvas } = this.props;
    
    this.state = {
      whichCanvas: whichCanvas
    }
  }
  render() {
    if (this.state.whichCanvas === 'public') {
      return (
        <div className="menuContent">
          <div id="topPortion"><span id="topPortionText">This is Public Canvas</span></div>
          <a className="menuItem" href="/Login">Login</a>
          <a className="menuItem" href="/Register">Sign up</a>
        </div>
      )
    } else if (this.state.whichCanvas === 'user') {
      return (
        <div className="menuContent">
          <div id="topPortionUser">                
            <div className='imgContainerCanvas'>
              <img className='profileImg' src={ Default_Profile } alt='profile' />        
            </div>
          <p> <span id="topPortionTextUser">John Doe</span></p>
          </div>            
          <a className="menuItem user" href="/">Log out</a>
        </div>

      )

    }
  }
}

export default BurgerMenuContent;
