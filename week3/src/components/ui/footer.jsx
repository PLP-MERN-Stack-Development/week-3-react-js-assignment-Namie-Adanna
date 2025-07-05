import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">PLP Task Manager</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A modern task management application built with React and Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Links</h3>
            <div className="space-y-1">
              {['About', 'Privacy', 'Terms', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;