import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../styles.css'


export class Recoverpswrd extends Component {

  checkEnter = event => {
    if(event.key === "Enter"){
      event.preventDefault();
      this.sendPass();
    }
  } 

  sendPass = event =>{
    //TODO when backend gets implemented
  }

  render() {
    return (
      <div className="container">
        <Link to="/" id="BackButtonLink" style={{ textDecoration: 'none' }}>
          <button id="BackButton">Back to <br/> Public Canvas</button> </Link>
        <div className="loginput">
          <h2>Recover Password</h2>
          <form>
            <input
              className="user_input"
              type="text"
              name="title"
              placeholder="Email"
              onKeyPress={this.checkEnter}
            />
          </form>
          <form>
            <input
              className="user_input"
              type="text"
              name="title"
              placeholder="Username"
              onKeyPress={this.checkEnter}
            />
          </form>

          <Button
            variant="contained"
            color="primary"
            className="submitbutton"
            onClick={this.sendPass}
          >Send Password</Button>
          <Link className='linktext' to="/Login">Login</Link>
        </div>
      </div>
      
    );
  }
}

        //<div className="loginpic">
          //<img id="temppic" src= { require('../assets/welcome.jpeg') } alt='temporary'/> 
        //</div>

export default Recoverpswrd
