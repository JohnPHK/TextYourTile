import React from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../Canvas/Canvas'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import './styles.css'


class UserCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
      whichCanvas : 'user'
    }
  }
  

  handleClick(event) {
    event.preventDefault();
    this.setState({
        open: !this.state.open
    });
  }

  render() {      
    return (
      <div>
        <BurgerMenu whichCanvas={this.state.whichCanvas}/>
        <Canvas whichCanvas={this.state.whichCanvas}/>
      </div>
    );
  }
}

export default UserCanvas;
