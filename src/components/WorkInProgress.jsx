import { Construction } from "lucide-react";
import Navbar from "./Navbar";

const WorkInProgress = () => {
  return (
    <><div className="w-full p-4">
    <Navbar />
  </div>
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="text-center">
        <Construction className="w-20 h-20 text-yellow-500 mx-auto animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">
          Work in Progress
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          We&apos;re building something amazing. Please check back soon!
        </p>
        <button
          onClick={() => window.location.replace("/")}
          className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
        >
          Go to Homepage
        </button>
      </div>
    </div>
    </>
  );
};

export default WorkInProgress;
