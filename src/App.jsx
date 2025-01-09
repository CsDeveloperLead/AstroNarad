
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import bg from "../src/assets/astrology-bg.png";
import Slider from './components/Slider';
function App() {
  

  return (
    <>
   <div className="relative w-full h-full">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-[#c5c4c2] opacity-40"
    style={{ backgroundImage: `url(${bg})` }}
  ></div>

  {/* Content */}
  <div className="relative z-10">
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </div>
</div>


     
    </>
  )
}

export default App
