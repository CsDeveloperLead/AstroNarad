
const ThankYouPage = () => {
  const tokenNumber = localStorage.getItem("Token_Number"); // Replace with dynamic token if needed

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for submitting your details with AstroNarad! Your token number is:
        </p>
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-3 rounded-lg mb-6">
          <span className="font-bold">{tokenNumber}</span>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Please join the waitlist for Astrologer Hiring once you get shortlisted. Please note that you will be notified about any updates both via WhatsApp and email.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          For further details, feel free to reach out to us via email at{" "}
          <a
            href="mailto:onboarding@astrotalk.com"
            className="text-yellow-600 hover:text-yellow-700 underline"
          >
            onboarding@astroNarad.com
          </a>
          . Looking forward to working with you!
        </p>
        <button
          onClick={() => window.location.href = "/"} // Replace with your desired action
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-3 px-8 rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-lg font-semibold"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;