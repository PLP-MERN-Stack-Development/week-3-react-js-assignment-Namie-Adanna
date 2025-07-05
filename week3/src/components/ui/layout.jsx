import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children, navbarLinks = [] }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar links={navbarLinks} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;