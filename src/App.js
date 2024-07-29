import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
// import ContactUs from "./Components/Contect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import

// import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {" "}
          {/* Replaced Switch with Routes */}
          // <Route exact path="/login" element={<Login />} />
          // <Route exact path="/Contect" element={<ContactUs />} />
          <Route
            exact
            path="/"
            element={<Content key="home" category="business" />}
          />
          <Route
            exact
            path="/business"
            element={<Content key="business" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<Content key="entertainment" category="entertainment" />}
          />
          <Route
            exact
            path="/health"
            element={<Content key="health" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<Content key="science" category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<Content key="sports" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<Content key="technology" category="technology" />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
