import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <Router>
      <TopNavBar />
      <SideBar />
      <div className="App">
        <h1>Watch out on this space, something exciting is coming!!</h1>
      </div>
    </Router>
  );
}

export default App;
