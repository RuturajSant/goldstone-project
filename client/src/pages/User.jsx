import React, { useState, useEffect } from "react";
import fetchUser from "../apis/fetchUser";
import getUsers from "../apis/getUsers";
import UserList from "../components/UserList";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const findUsers = async () => {
      try {
        const fetchResponse = await fetchUser();
        console.log(fetchResponse);
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    findUsers();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <UserList users={users} />
    </div>
  );
};

export default Users;
