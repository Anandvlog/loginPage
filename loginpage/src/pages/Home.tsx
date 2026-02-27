import React from "react";

const Home = () => {
  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;

  return (
    <div>
      <h1 className="text-red-500">
        {username ? `Welcome to Dashboard, ${username}` : "Welcome to Dashboard"}
      </h1>
    </div>
  );
};

export default Home;