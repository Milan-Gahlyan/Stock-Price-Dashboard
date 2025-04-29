import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} StockVision. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <span className="text-gray-400">Data provided for demonstration purposes only.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;