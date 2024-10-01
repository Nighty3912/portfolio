import React from 'react';
import NavbarMenu from './components/NavbarMenu'; 
import Sidebar from './components/Sidebar'; 
import './index.css'; 

const MainContainer = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content-wrapper">
        <NavbarMenu />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;