import React from "react";

import "./styles.css";

/* The Header Component */
class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div className="header">
        <h1 className="headerBox">{title}</h1>
        <h3 className="headerBox">{subtitle}</h3>
      </div>
    );
  }
}

export default Header;