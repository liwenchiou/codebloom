import React from "react";
import Navbar from "./components/Navbar";
import{Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Qna from "./pages/Qna";
function App() {
  return (
    <>
    <Navbar/>
      <div className="container mt-3">
        <Routes>
          <Route path='codebloom/' element={<Home/>}></Route>
          <Route path='codebloom/Dashboard' element={<Dashboard/>}></Route>
          <Route path='codebloom/Articles' element={<Articles/>}></Route>
          <Route path='codebloom/Projects' element={<Projects/>}></Route>
          <Route path='codebloom/Qna' element={<Qna/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
