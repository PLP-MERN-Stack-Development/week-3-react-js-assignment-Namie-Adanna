import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = ({ links = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const defaultLinks = [
    { href: '#home', label: 'Home' },
    { href: '#tasks', label: 'Tasks' },
    { href: '#api-data', label: 'API Data' }
  ];

  const navLinks = links.length > 0 ? links : defaultLinks;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">PLP Task Manager</h1>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            
            {/* Mobile Menu */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded text-gray-600 dark:text-gray-300">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden pb-3 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;