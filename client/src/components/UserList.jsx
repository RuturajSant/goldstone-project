import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
