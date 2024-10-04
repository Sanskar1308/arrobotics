import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [openDialogId, setOpenDialogId] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleUserDelete = async (userId) => {
    try {
      const response = await axios.post(
        `/admin/delete-user`,
        { userId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.status === 200) {
        setOpenDialogId(null);
        fetchUserDetails();
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("/admin/all-users", {
        headers: {
          Authorization: token,
        },
      });
      setUser(response.data.users);
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="containt">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(user) &&
              user.map((user) => (
                <tr key={user._id}>
                  <td>{user?.username}</td>
                  <td>{user?.age}</td>
                  <td>{user?.address}</td>
                  <td>{user?.email}</td>
                  <td>
                    {new Date(user?.createdAt).toLocaleString("en-CA", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => setOpenDialogId(user._id)}
                    >
                      <MdOutlineDeleteOutline color="white" />
                    </button>
                    {openDialogId === user._id && (
                      <dialog open className="modal">
                        <div className="modal-box">
                          <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => setOpenDialogId(null)}
                          >
                            ✕
                          </button>
                          <h3 className="font-bold text-lg">Delete</h3>
                          <p className="py-4">
                            {`Are you sure you want to delete ${user.username}?`}
                          </p>
                          <button
                            className="btn btn-error btn-sm absolute right-10 bottom-3"
                            onClick={() => handleUserDelete(user._id)}
                          >
                            Yes
                          </button>
                        </div>
                      </dialog>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
