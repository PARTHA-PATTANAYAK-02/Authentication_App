import { useNavigate } from "react-router-dom";

const PageNotAvailable = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops!</h1>
        <h2 className="text-xl font-semibold text-purple-600 mb-4">
          Page Not Available
        </h2>

        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to a familiar place.
        </p>

        <button
          onClick={() => navigate("/home")}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 cursor-pointer"
        >
          Go to Home
        </button>

        <div className="mt-8 text-sm text-gray-500">
          <p>Error code: 404</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotAvailable;
