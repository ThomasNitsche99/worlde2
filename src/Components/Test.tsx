import React, { useContext } from 'react';
import { ThemeContext } from '../Assets/ThemeContext';

export const ThemeChanger: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Hi friend!</div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
};
