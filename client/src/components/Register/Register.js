import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom';


import Header from "./../Header/Header"
import './styles.css'

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      password: '',
      password_again: '',
      email: '',
      admins: [],
      users : [],
      registered : false 
    }
    fetch('/users')
      .then(res => res.json())
        .then(db => db.forEach(user => {
          let userDb = {
            username : user["username"],
            password : user["password"],
            email: user['email']
          }
          this.state.users.push(userDb)
          })
        )
    
    fetch('/admins')
      .then(res => res.json())
        .then(db => db.forEach(admin => {
          let adminDb = {
            adminname : admin["adminname"],
            password : admin["password"],
            email : admin['email']
          }
          this.state.admins.push(adminDb)
          })
        )
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value 
    });
  };

  handleClick = event => {
    const userID = this.state.username;
    const userPsw = this.state.password; 
    const userPswAgain = this.state.password_again;
    const userEmail = this.state.email;
    
    if (userPsw === userPswAgain) {
      
      const usersArray = this.state.users
      const adminsArray = this.state.admins
      
      
      if (usersArray.some((person) => person.username === userID)) {
        alert("The username exists");
        return;
      }
      
      if (adminsArray.some((person) => person.adminname === userID)) {
        alert("This name is already assigned to one of the admin");
        return;
      }


      let requestOptions = {
        method : 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: userID, password: userPsw, email: userEmail })
      }

      fetch('/users', requestOptions)
      // below is not my code.
      // source: https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
        .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
        })
        .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
        });
      
      this.setState({registered: true})
    }
    else {
      alert("Passwords do not match")
    }
  }

  render() {    
    if (this.state.registered) {
      return (
        <div>
          <div className="topSection">
          <Link to="/">
            <button className="backBtn">
              Back to Public Canvas
            </button> 
          </Link>
          <Header title="REGISTER"/>
          </div>
          <div className="bottomSection">
            <div className="registerCompleteSection">
              <span id="welcome"><h2>Registration complete!</h2></span>
              <p id="toLogin"> Welcome to our community!</p>
            </div>
          </div>
        </div>

      )
    } else {
      return (
        <div>
          <div className="topSection">
          <Link to="/">
            <button className="backBtn">
              Back to Public Canvas
            </button> 
          </Link>
          <Header title="REGISTER"/>
          </div>
          <div className="bottomSection">
            <div className="inputSectionRegister">
              <span id="welcome"><h2>Welcome!</h2></span>
              <p><small>please fill in the blanks to register</small></p>
              <form className="formGroupRegister">
                <TextField 
                  label="Username"
                  type="username"
                  name="username"
                  className="userInput"
                  onChange={ this.handleInputChange }
                />
                <TextField 
                  label="Email"
                  type="email"
                  name="email"
                  className="userInput"
                  onChange={ this.handleInputChange }
                />
                <TextField 
                  label="Password"
                  type="password"
                  name="password"
                  className="userInput"
                  onChange={ this.handleInputChange }
                />
                <TextField 
                  label="Password again"
                  type="password"
                  name="password_again"
                  className="userInput"
                  onChange={ this.handleInputChange }
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="registerButton"
                  onClick={this.handleClick}
                >REGISTER
                </Button>
              </form>
            </div>
            <div className="loginSection">
              <p id="toLogin">Already have an account? {' '} 
              <Link to="/Login">Login</Link></p>
            </div>
          </div>
        </div>
        
        
      );

    }
  }
}


export default Register 
