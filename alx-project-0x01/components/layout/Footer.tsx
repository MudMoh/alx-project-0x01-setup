import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Blog</p>
      {/* Add other footer content here */}
    </footer>
  );
};

export default Footer;
