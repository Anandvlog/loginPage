import React from "react";

const Home = () => {
  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;

  return (
    <div>
      <h1 className="text-red-500">
        {username
          ? `Welcome to Dashboard, ${username}`
          : "Welcome to Dashboard"}
      </h1>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=1"
              alt="Card Image"
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mountain Adventure
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore the beauty of mountains with fresh air and peaceful
                nature views.
              </p>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Card Image"
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Beach Sunset
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Enjoy golden sunset moments with relaxing ocean waves.
              </p>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
