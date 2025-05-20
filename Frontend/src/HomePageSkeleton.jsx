import React from "react";

const HomePageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header Skeleton */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Banner Skeleton */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 animate-pulse">
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* User Information Section Skeleton */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 animate-pulse">
            <div className="space-y-6">
              <div className="h-6 w-1/4 bg-gray-300 rounded mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-sm p-6 animate-pulse"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                    <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <footer className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="h-4 w-48 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-6 w-20 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageSkeleton;
