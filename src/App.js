import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Header from "./components/Header";
// import UncontrolledExample from "./components/UncontrolledExample";

function App() {
  return (
    <Router>
      {/* <Header /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
