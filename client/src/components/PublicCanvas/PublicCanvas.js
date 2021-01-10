import React from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../Canvas/Canvas'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import './styles.css'

function mod(n, m) {
  return ((n%m)+m)%m;
}

class PublicCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
      whichCanvas : 'public'
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

export default PublicCanvas;
