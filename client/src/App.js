import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Recover from './components/Recover/Recover'
import UserAccount from './components/UserAccount/UserAccount'
import CreateWorld from './components/CreateWorld/CreateWorld'
import WorldSetting from './components/WorldSetting/WorldSetting'
import UserHome from './components/UserHome/UserHome'
import UserProfile from './components/UserProfile/UserProfile'
import MemberSetting from './components/MemberSetting/MemberSetting'
import PublicCanvas from './components/PublicCanvas/PublicCanvas'
import UserCanvas from './components/UserCanvas/UserCanvas'
import AdminHome from './components/AdminHome/AdminHome'
import AdminUsers from './components/AdminUsers/AdminUsers'
import PasswordChange from './components/PasswordChange/PasswordChange'
import AdminWorld from './components/AdminWorld/AdminWorld'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn : parseInt(localStorage.getItem("loggedIn")) || 0,
      name : localStorage.getItem("name") || '',
      email : localStorage.getItem("email") || '',
      userLogged : parseInt(localStorage.getItem("userLogged")) || 0,
      adminLogged : parseInt(localStorage.getItem("adminLogged")) || 0 
    }

  }

  setUser = (user) => {
    this.setState({
      name : user.username,
      email : user.email,
      userLogged : 1,
      adminLogged : 0 
    })
    localStorage.setItem("adminLogged", 0);
    localStorage.setItem("userLogged", 1);
    localStorage.setItem("email", user.email);
    localStorage.setItem("name", user.username);
    localStorage.setItem("loggedIn", 1);
  }; 

  setAdmin = (admin) => {
    this.setState({
      name : admin.adminname,
      email : admin.email,
      userLogged : 0,
      adminLogged : 1 
    })
    localStorage.setItem("adminLogged", 1);
    localStorage.setItem("userLogged", 0);
    localStorage.setItem("email", admin.email);
    localStorage.setItem("name", admin.adminname);
    localStorage.setItem("loggedIn", 1);
  };

  render() {
    return (
        <Router>
          <Route exact path="/" render={() => (<PublicCanvas/>)} />
          <Route exact path="/UserCanvas" render={() => (<UserCanvas/>)}/>
          <Route exact path="/Login" render={() => (
            <Login 
              setUser = { this.setUser } 
              setAdmin = { this.setAdmin }
            />
          )} />
          <Route exact path="/Register" render={() => (<Register/>)} />
          <Route exact path="/Recover" render={() => (<Recover/>)} />
          <Route exact path="/UserAccount" render={
            () => (
              <UserAccount
                name = { this.state.name }
                email = { this.state.email }
            />
          )} />
          <Route exact path="/UserHome" render={
            () => ( 
              <UserHome
                name = { this.state.name }
                email = { this.state.email }
              />
          )} />
          <Route exact path="/UserProfile" render={
            () => (
              <UserProfile
                name = { this.state.name }
                email = { this.state.email }
              />
          )} />
          <Route exact path="/CreateWorld" render={() => (<CreateWorld/>)} />
          <Route exact path="/WorldSetting" render={() => (<WorldSetting/>)} />
          <Route exact path="/MemberSetting" render={() => (<MemberSetting/>)} />
          <Route exact path="/AdminHome" render={() => (<AdminHome/>)} />
          <Route exact path="/AdminUsers" render={() => (<AdminUsers/>)} />
          <Route exact path="/AdminWorld" render={() => (<AdminWorld/>)} />
          <Route exact path="/PasswordChange" render={() => (<PasswordChange/>)} />
        </Router>
    )
  }

}

export default App;

