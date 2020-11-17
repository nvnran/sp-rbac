import React, { useState, useEffect } from 'react';
import {
  VscMenu,
  VscMail,
  VscMailRead,
  VscBell,
  VscBellDot,
} from 'react-icons/vsc';
import { ImUser } from 'react-icons/im';

const HeaderComponent = ({ handleMenu, menuState }) => {
  const [mail, setMail] = useState(false);
  const [notification, setNotification] = useState(true);

  const handleMenuClick = () => {
    handleMenu(!menuState);
  };

  return (
    <>
      <div className='header'>
        <div className='menuWrap'>
          <VscMenu size={24} color='white' onClick={handleMenuClick} />
        </div>
        <div className='headerMain'>
          <h6>SimPragma RBAC</h6>
        </div>
        <div className='profIcons'>
          <div className='profIcon'>{mail ? <VscMail /> : <VscMailRead />}</div>
          <div className='profIcon'>
            {notification ? <VscBellDot /> : <VscBell />}
          </div>
          <div className='profIcon'>
            <ImUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
