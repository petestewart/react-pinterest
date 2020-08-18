import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Navbar.scss';

class Navbar extends React.Component {
  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  logoutButton = () => {
    const { authed } = this.props;
    if (authed) {
      return (
        <button className="btn btn-danger" onClick={this.logoutClickEvent}>Log Out</button>
      );
    } return null;
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand" href="#">Pinterst</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span className="nav-link" href="#">Boards <span className="sr-only"></span></span>
              </li>
              <li className="nav-item">
              </li>
            </ul>
            <span className="my-2 my-lg-0">
              {this.logoutButton()}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
