import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS service and template IDs
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const publicKey = "your_public_key";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            contactNumber: "",
            message: "",
          });
        },
        () => {
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <>
     <div className="w-full p-4">
        <Navbar />
      </div>
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
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
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3 text-gray-900"
              placeholder="Enter your name"
            />
          </div>
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
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3 text-gray-900"
              placeholder="Enter your contact number"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-gray-600 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 p-3 text-gray-900"
              rows="4"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-900 text-white py-3 px-6 rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all text-lg font-semibold"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-6 text-center text-sm text-green-600">{status}</p>
        )}
      </div>
    </div>
    </>
  );
};

export default ContactUs;
