import React from "react";
import "./Sidebar.css";

function Sidebar({ setActiveSection }) {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL3NxdWFyZS9za2V0Y2guanBnP2RhdGVVcGRhdGVkPTE2NTc4OTk3NzEwMDA=" alt="Artist" />
        <h2>Georgia Lyra</h2>
        <p>Sketch Artist | Creative Mind</p>
      </div>
      <div className="social-links">
        <a href="www.behance.net">🌐</a>
        <a href="#">📷</a>
        <a href="#">🔗</a>
      </div>

      <nav className="nav">
        <ul>
          <li onClick={() => setActiveSection("About")}>About</li>
          <li onClick={() => setActiveSection("Portfolio")}>Portfolio</li>
          <li onClick={() => setActiveSection("Collections")}>Collections</li>
          <li onClick={() => setActiveSection("News")}>News / Exhibitions</li>
          <li onClick={() => setActiveSection("Contact")}>Contact</li>
        </ul>
      </nav>

    </div>
  );
}

export default Sidebar;
