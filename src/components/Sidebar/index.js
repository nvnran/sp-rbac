import React from 'react';
import { Link } from 'react-router-dom';

const SidebarComponent = ({ classes }) => {
  return (
    <>
      <div className={'sidebar' + classes}>
        <ul>
          <Link to='/home'>
            <li>Home</li>
          </Link>
          <Link to='/applications'>
            <li>Applications</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SidebarComponent;
