import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Main from "./components/main/Main";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
     <Routes>
        <Route path="/home" element={<Home />} />
       
      </Routes>
    </div>
  );
};

export default App;

