import { Image } from "antd";
import { FcPortraitMode } from "react-icons/fc";
const topNavBar = () => {
  return (
    <nav className="top-nav">
      <div>
        <h2>EYE CARE</h2>
      </div>
      <div className="logo">
        <Image src="" height={50} />
      </div>
      <FcPortraitMode />
    </nav>
  );
};

export default topNavBar;
