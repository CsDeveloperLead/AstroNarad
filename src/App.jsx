
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import bg from "../src/assets/astrology-bg.png";
import Slider from './components/Slider';
function App() {
  

  return (
    <>
     <div className='bg-cover bg-center w-full h-full 'style={{ backgroundImage: `url(${bg})`, opacity: 0.7 }}>
     
     <Router>
     {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<HomePage/>} />      
        </Routes>
      </Router>
     </div>
     

     
    </>
  )
}

export default App
