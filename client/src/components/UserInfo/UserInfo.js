import React from "react";
// import { Link } from 'react-router-dom';

import "./styles.css";

class UserInfo extends React.Component {  

  render() {
    const { title, content } = this.props;

    return (      
    	<div className='infoBox'>
          <div className='infoTitle'>
               {title}
          </div>             
          <div className='infoContent'>          
           	   {content}
          </div>                 
        </div>
    );
  }
}

export default UserInfo;