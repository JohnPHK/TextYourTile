import React from 'react';
import './styles.css';
import CheeseburgerMenu from 'cheeseburger-menu'
import BurgerMenuContent from '../BurgerMenuContent/BurgerMenuContent'


class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    const { whichCanvas } = this.props;

    this.state = {
      open : false,
      whichCanvas: whichCanvas
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    if (this.state.whichCanvas === 'public') {
      return (
        <div>
          <div
            className="burger-menu close"
            onClick={this.handleClick.bind(this)}>
            <div className="bar1" key="b1" />
            <div className="bar2" key="b2" />
            <div className="bar3" key="b3" />
          </div>
          <CheeseburgerMenu
            isOpen={this.state.open}
            closeCallback={this.handleClick.bind(this)}
          >
            <div
              className="burger-menu open"
              onClick={this.handleClick.bind(this)}>
              <div className="bar1" key="b1" />
              <div className="bar2" key="b2" />
              <div className="bar3" key="b3" />
            </div>       
            <BurgerMenuContent whichCanvas={this.state.whichCanvas}/>
          </CheeseburgerMenu>
        </div>
      )
    }
    else if (this.state.whichCanvas === 'user') {
      return (
        <div>
          <div
            className="burger-menu close"
            onClick={this.handleClick.bind(this)}>
            <div className="bar1" key="b1" />
            <div className="bar2" key="b2" />
            <div className="bar3" key="b3" />
          </div>
          <CheeseburgerMenu
            isOpen={this.state.open}
            closeCallback={this.handleClick.bind(this)}
            backgroundColor={'#2E3A42'}
          >
            <div
              className="burger-menu open"
              onClick={this.handleClick.bind(this)}>
              <div className="bar1 User" key="b1" />
              <div className="bar2 User" key="b2" />
              <div className="bar3 User" key="b3" />
            </div>       
            <BurgerMenuContent whichCanvas={this.state.whichCanvas}/>
          </CheeseburgerMenu>
        </div>
      )

    }

  }
}


export default BurgerMenu;
