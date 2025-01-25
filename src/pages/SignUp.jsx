import { useState } from "react";
import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();
  const isSignup = location.pathname.includes("/signup");
  const isAstrologer = location.pathname.includes("/astrologer");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    usertype: isAstrologer ? "astrologer" : "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isSignup ? "Signup" : "Login"} Form Data Submitted:`, formData);
    // Add your API call here to send formData to the backend.
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-extrabold font-playfair text-center mb-6 text-gray-800">
          {isAstrologer
            ? `Astrologer ${isSignup ? "Signup" : "Login"}`
            : `User ${isSignup ? "Signup" : "Login"}`}
        </h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border  border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3 text-gray-900"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3 text-gray-900"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3 text-gray-900"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-900 text-white py-3 px-6 rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all text-lg font-semibold"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          {isSignup
            ? "Already have an account? "
            : "Don't have an account? "}
          <a
            href={
              isAstrologer
                ? isSignup
                  ? "/astrologer/login"
                  : "/astrologer/signup"
                : isSignup
                ? "/user/login"
                : "/user/signup"
            }
            className="text-yellow-600 font-bold hover:underline"
          >
            {isSignup ? "Log In" : "Sign Up"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
