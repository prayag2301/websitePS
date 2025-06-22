import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from 'react-bootstrap';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className="theme-toggle">
      <Button 
        variant={isDarkMode ? "light" : "dark"} 
        size="md"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        style={{ 
          fontWeight: 'bold',
          padding: '8px 15px',
          fontSize: '16px'
        }}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </Button>
    </div>
  );
};

export default ThemeToggle;
