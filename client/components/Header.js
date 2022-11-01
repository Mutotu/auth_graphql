import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import { Link } from "react-router";

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) return <div />;
    if (user) return <div>Logout</div>;
    else
      return (
        <div>
          <li>
            <Link to='/signup'>Sign up</Link>
          </li>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
        </div>
      );
  }

  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <Link to='/'>Home</Link>
            <ul className='right'>{this.renderButtons()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default graphql(query)(Header);
