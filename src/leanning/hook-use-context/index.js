/**
 * Truyền dữ liệu qua các component
 * cấu trúc : https://codesandbox.io/s/nostalgic-tesla-befh7b?file=/src/App.js:0-365
 */

import { createContext, useState } from "react";
import './App.css';
import Content from "./content";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={theme}>
        <div style={{ padding: 20 }}>
            <button onClick={toggleTheme}>Toogle theme</button>
         <Content />
        </div>
    </ThemeContext.Provider>
  );
}
export default App;
