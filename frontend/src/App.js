import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <TopNavBar />
      <div className="App">
        <SideBar />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
