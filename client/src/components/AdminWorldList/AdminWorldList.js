import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import AdminUserWorld from "./../AdminUserWorld/AdminUserWorld";

// import "./styles.css";

class AdminWorldList extends React.Component {

  state = {
    worlds: [
      {wID: 0, userID: "Public", worldName: "Public Canvas", link: "/"},
      {wID: 1, userID: "One", worldName: "World 1", link: "/UserCanvas"},
      {wID: 2, userID: "One", worldName: "World 2", link: "/UserCanvas"},
      {wID: 3, userID: "One", worldName: "World 3", link: "/UserCanvas"},
      {wID: 4, userID: "Two", worldName: "New World 1", link: "/UserCanvas"},
      {wID: 5, userID: "Two", worldName: "New World 2", link: "/UserCanvas"},
      {wID: 6, userID: "Three", worldName: "Whole New World 1", link: "/UserCanvas"}      
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
              World Name
            </TableCell>            
            <TableCell component="td" scope="row">
              Go Button
            </TableCell>
          </TableRow>
          {this.state.worlds.map(world => (
            <AdminUserWorld
              key={world.wID}
              world={world}                     
            />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default AdminWorldList;