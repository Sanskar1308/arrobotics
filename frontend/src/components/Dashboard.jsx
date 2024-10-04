import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Dashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/profile`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.data;
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button
        className="btn btn-sm absolute top-2 right-2"
        data-theme="dark"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_1280.png"
            alt="Album"
            className="h-96 object-cover w-60"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Hey Batman!! here is your
            <span className="tooltip" data-tip="secrect profile">
              profile
            </span>
            .
          </h2>
          {user && (
            <div>
              <p className="text-gray-600">
                Name:{" "}
                <span className="text-xl font-black">{user.username}</span>
              </p>
              <p className="text-gray-600">
                Email: <span className="text-xl font-black">{user.email}</span>
              </p>
              <p className="text-gray-600">
                Address:{" "}
                <span className="text-xl font-black">{user.address}</span>
              </p>
              <p className="text-gray-600">
                Age: <span className="text-xl font-black">{user.age}</span>
              </p>
              <p className="text-gray-600">
                Last Updated:{" "}
                <span className="text-base font-black">
                  {new Date(user?.createdAt).toLocaleString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </p>
            </div>
          )}
          <div className="card-actions absolute bottom-10 right-5 ">
            <button className="btn btn-base" data-theme="dark">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
