import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { auth } from '../components/Firebase';

import 'semantic-ui-css/semantic.min.css';

const LayoutUI = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        auth.signOut();
        window.location.replace('/login');
      }
    });
  }, []);

  useEffect(() => {
    if (menu) {
      setShowMenu(' unhide');
    } else {
      setShowMenu('');
    }
  }, [menu]);

  const handleMenu = (menuState) => {
    setMenu(menuState);
  };
  return (
    <>
      <Header handleMenu={handleMenu} menuState={menu} />
      <Sidebar classes={showMenu} />
      {children}
    </>
  );
};
export default LayoutUI;
