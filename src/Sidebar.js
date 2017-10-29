
import React from 'react';
import './Sidebar.css'

const Sidebar = ({ resetCurrentNote, signOut }) => {
  return (
    <nav className="Sidebar">
      <div className="logo">
        <img src="media/quill.svg" alt="Noteherder"/>
      </div>
      <a className="new-note"
        onClick={resetCurrentNote}
      >
        <img src="media/new-hover.png" alt="New note"/>
        <img className="outline" src="media/new.png" alt="New note"/>
      </a>
      <div className="SignOut">
        <button onClick={signOut}>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;