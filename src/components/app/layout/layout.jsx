import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderLink from './header_link/header_link';
import './style_layout.css';

function Layout() {
  return (
    <div>
      <header className="header">
        <HeaderLink text="Home" path="/home" />
        <HeaderLink text="Stats" path="/stats" />
        <HeaderLink text="Help" path="/help" />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
