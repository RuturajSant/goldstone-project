import React, { useState } from "react";
import editUsers from "../apis/editUsers";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className="bg-white p-6 shadow mb-4">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Status: {user.status}</p>

      <Link
        className=" relative top-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded"
        to={{
          pathname: `/user/${user._id}`,
        }}
      >
        Edit
      </Link>
    </div>
  );
};

export default UserItem;
