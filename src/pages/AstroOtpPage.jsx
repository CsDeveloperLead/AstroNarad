import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';  // Updated import

const OTPPage = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Updated to useNavigate
  const { email } = location.state || {};
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (e) => setOtp(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log({ email });

    try {
      const response = await axios.post('http://localhost:8000/auth/submit-otp', {
        username: email,
        otp,
      });
      

      console.log("reposnse",response);
      const token = response.data.accessToken      ;
      localStorage.setItem('token',token);
      console.log("token",token);

      if (response.status === 200) {
        // OTP verified, now verify token and save astrologer data
        const tokenResponse = await axios.post('http://localhost:8000/auth/verify-token', {token} );

        console.log("response",tokenResponse);
        const user_id = tokenResponse.data.user_id;
        localStorage.setItem('user_id',user_id);

        if (tokenResponse.status === 200) {
          // Save astrologer data to DB
          // const astrologerData = {
          //   name,
          //   phone,
          //   // Include other astrologer data here
          // };

          // await axios.post('http://localhost:8000/astrologer/signup', astrologerData);

          // Redirect to astrologer dashboard or success page
          navigate('/astrologermain/signup', { state: { user_id } });
        }
      }
    } catch (err) {
      setError('Invalid OTP. Please try again.',err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Enter OTP</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* OTP */}
        <div className="mb-5">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter the OTP sent to your phone"
            className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-900 text-white py-3 px-6 rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all text-lg font-semibold"
          disabled={loading}
        >
          {loading ? 'Verifying OTP...' : 'Verify OTP'}
        </button>
      </form>
    </div>
  );
};

export default OTPPage;
