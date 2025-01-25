import { useNavigate } from "react-router-dom";

const DeterminerPage = () => {
  const navigate = useNavigate();

  const handleAstrologer = () => {
    navigate("/astrologer/signup");
  };

  const handleNormalUser = () => {
    navigate("/user/signup");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-6xl font-bold mb-8 font-playfair text-yellow-500">Welcome to Our Platform</h1>
      <p className="text-2xl font-extrabold my-4 font-playfair text-green-800">Are you an Astrologer or a User?</p>
      <div className="flex space-x-8 my-10">
        {/* Astrologer Button */}
        <button
          onClick={handleAstrologer}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          I&apos;m an Astrologer
        </button>

        {/* Normal User Button */}
        <button
          onClick={handleNormalUser}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          I&apos;m a Normal User
        </button>
      </div>
    </div>
  );
};

export default DeterminerPage;