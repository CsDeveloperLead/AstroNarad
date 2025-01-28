// import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import bg from "../src/assets/astrology-bg.png";
// import Slider from './components/Slider';
import DeterminerPage from "./pages/SignUpDeterminerPage.jsx";
// import AuthPage from "./pages/SignUp.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import WorkInProgress from "./components/WorkInProgress.jsx";
import ContactUs from "./components/ContactUs.jsx";
import AstrologerSignupPage from "./pages/AstrologerSignupPage.jsx";
import SignUp from "./pages/AstrologerSignUp.jsx";
import OTPPage from "./pages/AstroOtpPage.jsx";
import ThankYouPage from "./pages/Thankyou.jsx";
import UserSignUp from "./pages/UserSignup.jsx";
import UserSignUpPage from "./pages/UserSignUpPage.jsx";
import UserOtpPage from "./pages/UserOtpPage.jsx";
import SignupDeterminerPage from "./pages/SignUpDeterminerPage.jsx";
import LoginDeterminerPage from "./pages/LoginDeterminerPage.jsx";
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
              <Route path="/signup/determiner" element={<SignupDeterminerPage />} />
              <Route path="/login/determiner" element={<LoginDeterminerPage/>} />
              <Route path="/astrologer/signup" element={<SignUp />} />
              <Route path="/user/signup" element={<UserSignUp />} />

              {/* <Route path="/astrologer/login" element={<AuthPage />} />
              <Route path="/user/signup" element={<AuthPage />} />
              <Route path="/user/login" element={<AuthPage />} /> */}
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/about" element={<WorkInProgress />} />
              <Route path="/services" element={<WorkInProgress />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/astro/otp" element={<OTPPage />} />
              <Route path="/user/otp" element={<UserOtpPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route
                path="/astrologermain/signup" element={<AstrologerSignupPage />}
              />
              <Route
                path="/usermain/signup" element={<UserSignUpPage />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
