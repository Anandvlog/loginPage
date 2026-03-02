import React from "react";
import demoData from "../json/data.json";

const Home = () => {
  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;

  return (
    <div>
      <h1 className="text-red-500 p-5">
        {username
          ? `Welcome to Dashboard, ${username}`
          : "Welcome to Dashboard"}
      </h1>
      <div className="min-h-screen bg-gray-100 pt-6">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoData.map((item) => {
            return (
              <div
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                key={item.id}
              >
                <img
                  src={item.img}
                  alt="Card Image"
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Read More
                  </button>
                </div>
              </div>
            );
          })}

          {/* <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
