import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Collections from "./components/Collections";
import News from "./components/News";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("About");

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Collections":
        return <Collections />;
      case "News":
        return <News />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">{renderSection()}</div>
    </div>
  );
}

export default App;
