import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import navitems from "../navitems";
const { Sider } = Layout;
const asideBar = () => {
  return (
    <Sider className="sidebar">
      {navitems.map((nav, i) => (
        <div key={1}>
          <div className="nav-item">
            <span>{nav.icon}</span>
            <h3 style={{ color: "white" }}>{nav.title}</h3>
          </div>
        </div>
      ))}
    </Sider>
  );
};

export default asideBar;
