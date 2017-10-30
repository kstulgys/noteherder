
import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = ({ signOut }) => {
  return (
    <nav className="Sidebar">
      <div className="logo">
        <img src="media/quill.svg" alt="Noteherder"/>
      </div>
      <Link to="/notes" className="new-note"
      >
        <img src="media/new-hover.png" alt="New note"/>
        <img className="outline" src="media/new.png" alt="New note"/>
      </Link>
      <div className="SignOut">
        <button onClick={signOut}>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;