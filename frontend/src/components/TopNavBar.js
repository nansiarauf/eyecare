import { Image } from "antd";
import { FcPortraitMode } from "react-icons/fc";
import { Layout } from "antd";
const { Header } = Layout;
const topNavBar = () => {
  return (
    <Header className="main-header">
      <h2 style={{ color: "white" }}>EYE CARE</h2>
      <div className="logo"></div>
      <FcPortraitMode size={30} />
    </Header>
  );
};

export default topNavBar;
