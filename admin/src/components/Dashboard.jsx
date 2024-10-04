import React from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Hey Admin!!!</a>
        </div>
        <button
          className="btn btn-sm"
          data-theme="dark"
          onClick={() => {
            localStorage.removeItem("token");
            nav("/login");
          }}
        >
          Logout
        </button>
      </div>
      <div className="px-20 mt-10">
        <h1 className="font-extrabold text-3xl mb-10">User Details</h1>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
