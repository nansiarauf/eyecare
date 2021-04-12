import { Menu } from "antd";
import { Link } from "react-router-dom";
import navitems from "../navitems";
const asideBar = () => {
  return (
    <nav className="sidebar">
      {navitems.map((nav, i) => (
        <div key={1}>
          <div className="nav-item">
            <span>{nav.icon}</span>
            <h3>{nav.title}</h3>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default asideBar;
