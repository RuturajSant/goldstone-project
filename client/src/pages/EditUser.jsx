import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// import api from "../services/api";
import { useNavigate } from "react-router-dom";
import editUsers from "../apis/editUsers";
import getUsers from "../apis/getUsers";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    async function handlePayload() {
      const response = await getUsers();
      response.map((user) => {
        user._id == id ? setEditedUser(user) : {};
      });
    }
    handlePayload();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(editedUser);
      const response = await editUsers(id, editedUser);
      console.log(response);

      navigate("/");
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="pr-5" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedUser.name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="pr-5" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={editedUser.email || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="pr-5" htmlFor="gender">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={editedUser.gender || ""}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="pr-5" htmlFor="status">
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={editedUser.status || ""}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditUser;
