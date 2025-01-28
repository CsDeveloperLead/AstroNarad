import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Updated import

const AstrologerLogin = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Updated to useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8000/auth/signin', {
        email: formData.email,
        phone: formData.phone,
        user_type: "astro"
      });

      console.log(response);
      console.log(response.status);

      if (response.status === 200) {
        // Redirect to OTP page using navigate
        navigate('/astrologin/otp', { state: { phone: formData.phone, name: formData.name,email: formData.email } });
      }
    } catch (err) {
      setError('Failed to send OTP. Please try again.',err);
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
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Sign Up</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Name */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
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
          {loading ? 'Sending OTP...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AstrologerLogin;
