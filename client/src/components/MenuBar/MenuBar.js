import React from "react";
import { Link } from 'react-router-dom';
import Default_Profile from "./default_profile.jpg"

import "./styles.css";

function checkOn(num, on, menu, link) {
    if (on) {
        return (<Link key={num} to={link} className='eachMenuOn'> {menu} </Link>)
    } else {
        return (<Link key={num} to={link} className='eachMenu'> {menu} </Link>)
    }
}

class MenuBar extends React.Component {  

  render() {
    const { name, menuList } = this.props;

    return (
        <div className='mainMenu'>            
            <div className='imgContainer'>                
                <img className='profileImg' src={ Default_Profile } alt='profile' />            
            </div>            
            <div className='userProfile'>
                { name }                
            </div>              
            {menuList.map(menu => (
                checkOn(menu.num, menu.on, menu.menu, menu.link)
            ))}   
        </div>
    );
  }
}

export default MenuBar;