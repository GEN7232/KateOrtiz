import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Header from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/footer/Footer.js";
import Singles from "./components/pages/Music/Singles";
import Commissions from "./components/pages/Music/Commissions";
import Mini from "./components/pages/Music/Mini";
import Videos from "./components/pages/Music/Videos";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
            <Route path="/singles" element={<Singles />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/mini-songs" element={<Mini />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </>
      </Router>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
