import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom';
import Header from "./../Header/Header"
import './styles.css'


export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '', 
      admins: [],
      users: []
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

  checkEnter = event => {
    if(event.key === "Enter"){
      event.preventDefault();
      this.handleClick();
    }
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
    const adminsArray = this.state.admins
    const usersArray = this.state.users
    let found = 0

    for (let index = 0; index < usersArray.length; index++) {
      if (usersArray[index].username === userID && usersArray[index].password === userPsw) {
        this.props.setUser({username: usersArray[index].username, email: usersArray[index].email})
        window.location.href = "/UserHome";
        found = 1
      }
    }

    for (let index = 0; index < adminsArray.length; index++) {
      if (adminsArray[index].adminname === userID && adminsArray[index].password === userPsw) {
        this.props.setAdmin({adminname: adminsArray[index].adminname, email: adminsArray[index].email})
        window.location.href = "/AdminHome";
        found = 1
      }
    }

    if (found === 0) {
      alert("Either the password is wrong or such username does not exist.")
    }
  };

  render() {    
    return (
      <div>
        <div className="topSection">
        <Link to="/">
          <button className="backBtn">
            Back to Public Canvas
          </button> 
        </Link>
        <Header title="LOGIN"/>
        </div>
        <div className="bottomSection">
          <div className="inputSectionLogin">
            <span id="welcome"><h2>Welcome Back!</h2></span>
            <form className="formGroupLogin">
              <TextField 
                label="Username"
                type="username"
                name="username"
                className="userInput"
                value={ this.state.name }
                onChange={ this.handleInputChange }
                onKeyPress={ this.checkEnter }
              />
              <TextField 
                label="Password"
                type="password"
                name="password"
                className="userInput"
                value={ this.state.password }
                onChange={ this.handleInputChange }
                onKeyPress={ this.checkEnter }
              />
              <Button
                variant="contained"
                color="primary"
                className="submitButton"
                onClick={this.handleClick}
              >LOGIN
              </Button>
              <Link to="/Recover">Forgot password?</Link>
            </form>
          </div>
          <div className="registerSection">
            <p id="toRegister">Don't have an account? {' '} 
              <Link to="/Register">Register</Link></p>
          </div>
        </div>
      </div>
      
      
    );
  }
}


export default Login
