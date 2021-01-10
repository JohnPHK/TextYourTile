import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from 'react-router-dom';

import "./styles.css";

class AdminUserWorld extends React.Component {

  render() {
    const { world } = this.props;

    return (
      <TableRow key={world.wID}>
        <TableCell component="td" scope="row">
          {world.userID}
        </TableCell>

        <TableCell component="td" scope="row">
          {world.worldName}
        </TableCell>      

        <TableCell component="td" scope="row">

          <Link to={ world.link }>
          <button className="goWorldBtn" >
            Go
          </button>
          </Link>
        </TableCell>
      </TableRow>
    );
  }
}

export default AdminUserWorld;