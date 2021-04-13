import {
  FcHome,
  FcSettings,
  FcPrint,
  FcSalesPerformance,
  FcBarChart,
  FcConferenceCall,
} from "react-icons/fc";
const navitems = [
  {
    title: "HOME",
    link: "/",
    icon: <FcHome size={30} />,
  },
  {
    title: "SALES",
    link: "/",
    icon: <FcSalesPerformance size={30} />,
  },
  {
    title: "REPORTS",
    link: "/",
    icon: <FcBarChart size={30} />,
  },
  {
    title: "USERS",
    link: "/",
    icon: <FcConferenceCall size={30} />,
  },
  {
    title: "SETTINGS",
    link: "/",
    icon: <FcSettings size={30} />,
  },
];

export default navitems;
