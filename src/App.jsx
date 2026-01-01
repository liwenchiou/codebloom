import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// 注意：這裡只 import Routes 和 Route，不要 import 任何 Router
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Qna from "./pages/Qna";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0 bg-dark">
        <Routes>
          {/* 因為使用了 HashRouter，路徑直接從 / 開始即可  SSSS */}
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Qna" element={<Qna />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;