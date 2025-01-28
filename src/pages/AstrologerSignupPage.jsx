import { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import the navigate function from react-router-dom

const AstrologerSignupPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const user = localStorage.getItem("user_id");
  const [formData, setFormData] = useState({
    name: "",
    profile_image: null,
    about: "",
    experience: "",
    rating: "",
    language_known: "",
    type: "", // Changed to string
    total_time_spent_on_call: "",
    total_time_spent_on_message: "",
    expertise: "",
    charge: "",
    dob: "",
    gender: "", // Added gender field
    user_id: user, // Added user_id field
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create a FormData object to send the image file
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.profile_image);

    const accessToken = localStorage.getItem("token");

    try {
      // Send the image file to the backend API
      const uploadResponse = await axios.post(
        "http://localhost:8000/api/upload-image",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            accessToken: accessToken, // Add the JWT token for authentication
          },
        }
      );

      console.log("Image Upload Response:", uploadResponse.data);
      const imageUrl = uploadResponse.data.image;
      console.log("Image URL:", imageUrl);
      formData.profile_image = imageUrl;

      console.log("Form Data:", formData);

      // Now send the rest of the form data to your backend
      const formDataWithoutImage = { ...formData };
      delete formDataWithoutImage.profile_image; // Remove the image file from the form data

      const signupResponse = await axios.post(
        "http://localhost:8000/api/astrologer", // Replace with your actual signup endpoint
        formData,
        {
          headers: {
            accessToken: accessToken, // Add the JWT token for authentication
          },
        }
      );

      console.log("Signup Response:", signupResponse.data);
      localStorage.setItem("Token_Number", signupResponse.data.token_no);
      setLoading(false);

      alert("Signup successful!");
      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("An error occurred. Please try again.");
    }
  };

  const astrologerTypes = [
    "Vedic",
    "Western",
    "Numerology",
    "Tarot",
    "Palmistry",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-5xl"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800 font-playfair">
          Astrologer Signup
        </h2>

        {/* Profile Picture */}
        <div className="mb-6 flex justify-center">
          <label
            htmlFor="profile_image"
            className="relative w-40 h-40 rounded-full bg-gray-200 border-4 border-gray-300 flex justify-center items-center cursor-pointer overflow-hidden hover:border-yellow-500"
          >
            {formData.profile_image ? (
              <img
                src={URL.createObjectURL(formData.profile_image)}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-sm text-gray-500">Upload Image</span>
            )}
            <input
              type="file"
              id="profile_image"
              name="profile_image"
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </label>
        </div>

        {/* Name and DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
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
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
              required
            />
          </div>
        </div>
        {/* Gender */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="w-full md:w-1/2 md:pr-10 flex justify-between">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Others"
                checked={formData.gender === "Others"}
                onChange={handleChange}
                className="mr-2"
              />
              Others
            </label>
          </div>
        </div>

        {/* About */}
        <div className="mb-5">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            About
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Write a short bio"
            className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
            rows="3"
          ></textarea>
        </div>

        {/* Experience and Rating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience (Years)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter your experience"
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
              required
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              max="5"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Rating out of 5"
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
              required
            />
          </div>
        </div>

        {/* Languages Known */}
        <div className="mb-5">
          <label
            htmlFor="language_known"
            className="block text-sm font-medium text-gray-700"
          >
            Languages Known
          </label>
          <input
            type="text"
            id="language_known"
            name="language_known"
            value={formData.language_known}
            onChange={handleChange}
            placeholder="E.g., English, Hindi"
            className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
            required
          />
        </div>

        {/* Type */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
            required
          >
            <option value="" disabled>
              Select a type
            </option>
            {astrologerTypes.map((typeValue) => (
              <option key={typeValue} value={typeValue}>
                {typeValue}
              </option>
            ))}
          </select>
        </div>

        {/* Total Time Spent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label
              htmlFor="total_time_spent_on_call"
              className="block text-sm font-medium text-gray-700"
            >
              Total Time Spent on Call (Minutes)
            </label>
            <input
              type="number"
              id="total_time_spent_on_call"
              name="total_time_spent_on_call"
              value={formData.total_time_spent_on_call}
              onChange={handleChange}
              placeholder="Enter time in minutes"
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
              required
            />
          </div>
          <div>
            <label
              htmlFor="total_time_spent_on_message"
              className="block text-sm font-medium text-gray-700"
            >
              Total Time Spent on Message (Minutes)
            </label>
            <input
              type="number"
              id="total_time_spent_on_message"
              name="total_time_spent_on_message"
              value={formData.total_time_spent_on_message}
              onChange={handleChange}
              placeholder="Enter time in minutes"
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
              required
            />
          </div>
        </div>

        {/* Expertise and Charge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label
              htmlFor="expertise"
              className="block text-sm font-medium text-gray-700"
            >
              Expertise
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              placeholder="E.g., Marriage"
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
              required
            />
          </div>
          <div>
            <label
              htmlFor="charge"
              className="block text-sm font-medium text-gray-700"
            >
              Charge (per session)
            </label>
            <input
              type="number"
              id="charge"
              name="charge"
              value={formData.charge}
              onChange={handleChange}
              placeholder="Enter your charge"
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-900 text-white py-3 px-6 rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all text-lg font-semibold"
          disabled={loading}
        >
           {loading ? "Submitting..." : "Submit Form"}
        </button>
       
      </form>
    </div>
  );
};

export default AstrologerSignupPage;
