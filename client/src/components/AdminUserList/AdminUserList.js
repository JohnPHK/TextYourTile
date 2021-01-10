import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import AdminUser from "./../AdminUser/AdminUser";

import "./styles.css";

class AdminUserList extends React.Component {

  state = {
    users: [
      {name: "One", userID: "One", reports: 5},
      {name: "Two", userID: "Two", reports: 0},
      {name: "Three", userID: "Three", reports: 3},
      {name: "Four", userID: "Four", reports: 0},
    ]
  }

  render() {
  
    return (
      <Table className="userList">
        <TableBody>
          <TableRow>
            <TableCell component="td" scope="row">
              User ID
            </TableCell>
            <TableCell component="td" scope="row">
              User Name
            </TableCell>
            <TableCell component="td" scope="row">
              Reports
            </TableCell>
            <TableCell component="td" scope="row">
              Ban Button
            </TableCell>
          </TableRow>
          {this.state.users.map(user => (
            <AdminUser
              key={user.userID}
              user={user}            
            />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default AdminUserList;