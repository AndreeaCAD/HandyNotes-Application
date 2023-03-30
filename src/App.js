import React, { useState, createContext } from "react";
import Header from "./components/Header";
import ReactSwitch from "react-switch";
import Main from "./components/Main";
// import Login from "./components/Login";
import Footer from "./components/Footer";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header />
        <div className="container">
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <Main />
          {/* <Login /> */}
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
