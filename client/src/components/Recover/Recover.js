import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom';
import Header from "./../Header/Header"
import './styles.css'


export class Recover extends Component {
  render() {    
    return (
      <div>
        <div className="topSection">
        <Link to="/">
          <button className="backBtn">
            Back to Public Canvas
          </button> 
        </Link>
        <Header title="RECOVER"/>
        </div>
        <div className="bottomSection">
          <div className="inputSectionRecover">
            <span id="welcome"><h2>Recover</h2></span>
            <p><small>please fill in the blanks to recover your password</small></p>
            <form className="formGroupRecover">
              <TextField 
                label="Email"
                type="email"
                className="userInput"
              />
              <TextField 
                label="Password"
                type="password"
                name="password"
                className="userInput"
              />
              <Button
                variant="contained"
                color="primary"
                className="recoverButton"
                onClick={this.handleClick}
              >RECOVER PASSWORD
              </Button>
            </form>
          </div>
          <div className="registerSection">
            <p id="toRegister">Don't have an account? <space/> 
<Link to="/Register">Register</Link></p>
          </div>
        </div>
      </div>
      
      
    );
  }
}


export default Recover 
