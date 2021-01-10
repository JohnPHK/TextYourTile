import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


import "./styles.css";

class AdminUser extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <TableRow key={user.userID}>
        <TableCell component="td" scope="row">
          {user.userID}
        </TableCell>

        <TableCell component="td" scope="row">
          {user.name}
        </TableCell>

        <TableCell component="td" scope="row">
          {user.reports}
        </TableCell>

        <TableCell component="td" scope="row">
          <button className="banBtn">
            Ban
          </button>
        </TableCell>
      </TableRow>
    );
  }
}

export default AdminUser;