import React from "react";
import { Link } from 'react-router-dom';

import "./styles.css";

class World extends React.Component {  

  render() {
    const { world } = this.props;

    return (
      <li className="world" key={world.name}>     
          <div className='subName'>
          {world.name}      
          </div>             
          <div className='content'>          
            <div className='contentInfo'>
            {world.views} views
            <br />              
            {world.likes} likes
            <br />
            { world.isPublic ? ("Public") : ("Private")  }                
            <br />
            <Link className="setting" to={'/WorldSetting'}>            
            setting            
            </Link>
            </div>
            <div className='btnContainer'>
            <Link to="/UserCanvas">
            <button className='goBtn'>
            GO
            </button>
            </Link>
            </div>
          </div>            
      </li>
    );
  }
}

export default World;