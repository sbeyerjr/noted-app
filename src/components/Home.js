import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export default function Home(props) {
  return (
    <div className="wrapper">
      <div className="flex-container">
        <div className="flex-item">
          <img
            src="http://stevenbeyerjr.com/img/notedwhitelogo.png"
            alt="noted-logo"
          />
        </div>
        <div className="flex-item">
          <p class="intro-text">
            Can't remember what you practiced yesterday? Noted can help!{' '}
          </p>
        </div>
        <div className="flex-item">
          <p class="intro-second-text">
            Noted is for piano students who want to set consistent practice
            goals and keep track of what they have practiced.
          </p>
        </div>
        <div className="flex-item">
          <Link to="/register">
            <button className="fp-button">Get Started!</button>
          </Link>
          <Link to="/login">
            <button className="fp-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
