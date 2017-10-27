
import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <nav className="Sidebar">
      <div className="logo">
        <img src="media/quill.svg" alt="Noteherder"/>
      </div>
      <a className="new-note" href="/notes">
        <img src="media/new-hover.png" alt="New note"/>
        <img className="outline" src="media/new.png" alt="New note"/>
      </a>
      <div className="SignOut">
        <button>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;