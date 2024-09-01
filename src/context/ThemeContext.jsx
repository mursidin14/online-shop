import { createContext, useContext, useState, useEffect } from 'react';

const ThemeStateContext = createContext();

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');


  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  })

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeStateContext.Provider value={{ 
        theme,
        toggleTheme,
     }}>
        {children}
    </ThemeStateContext.Provider>
  )
}

export const useThemeContext = () => {
    return useContext(ThemeStateContext);
}