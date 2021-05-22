import { useEffect, useState } from 'react'
import { MoonOutline, Moon, Sun } from "heroicons-react";
import "../tasks/styles/_four.scss";
import { useLocation } from 'react-router-dom'

/* 
  Think: How we would use this Dark/Light mode switcher on other potential routes/components in a bigger application.
  Would your solution work for this?
*/

const SwitchTheme = () => {
  const [currentTheme, setTheme] = useState( localStorage.getItem("theme") || 'dark' )
  const location = useLocation();
  console.log('location', location.pathname);

  const updateTheme = () => {
    document.body.classList.remove('dark')
    document.body.classList.remove('light')
    document.body.classList.add(currentTheme)
    
    document.querySelectorAll('.theme-override').forEach(element => {
      element.classList.remove('dark')
      element.classList.remove('light')
      element.classList.add(currentTheme)
    })
  }

  const toggleTheme = () => {
    const nextTheme = currentTheme == 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem("theme", nextTheme)
  }

  useEffect(() => {
    updateTheme(currentTheme)
  }, [currentTheme, location.pathname])

  return (
    <button className="ch4__dark-mode-btn" onClick={toggleTheme}>
      {currentTheme == 'dark' ? <Sun fontSize={30} /> : <Moon fontSize={30} />}
    </button>
  );
};

export default SwitchTheme;
