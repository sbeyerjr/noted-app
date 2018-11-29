import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/Auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';
import { fetchProtectedData } from '../actions/ProtectedData';
import './Header.css';

export class HeaderBar extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    let usersFirstName;
    let myDashboard;
    let myPractices;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="nav-btn" onClick={() => this.logOut()}>
          Log out
        </button>
      );
      myDashboard = (
        <a href="/dashboard" className="nav-item nav-btn">
          My Dashboard
        </a>
      );
      myPractices = (
        <a href="/practices" className="nav-btn">
          My Practices
        </a>
      );
    }
    return (
      <header>
        <div className="nav-container">
          <div>
            <Link to="/">
              <img
                src="http://stevenbeyerjr.com/img/notedlogo.png"
                alt="noted-logo"
              />
            </Link>
          </div>
          {usersFirstName}
          {myDashboard}
          {myPractices}
          {logOutButton}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  loggedOut: state.auth.currentUser == null
});

export default connect(mapStateToProps)(HeaderBar);
