import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import Listings from "./pages/Listings";
import Funds from "./pages/Funds";

function App() {
  return (
    <>
      <Router>
        <div className="sm:mx-[183px] mx-[30px]">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/funds" element={<Funds />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
