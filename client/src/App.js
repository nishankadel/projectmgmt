import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="clients" element={<Clients />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
