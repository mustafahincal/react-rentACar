import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { getUsers } from "../../services/userService";

function Users() {
  const { users, setUsers } = useUserContext();
  useEffect(() => {
    getUsers().then((result) => setUsers(result.data));
  }, []);
  return (
    <div>
      {users.map((user, index) => (
        <div
          className="py-3 px-5 bg-white hover:bg-gray-100 rounded w-full mb-3 flex justify-between items-center"
          key={index}
        >
          <div>{user.firstName + " " + user.lastName}</div>
          <div>{user.email}</div>
          <div>{user.status ? "true" : "false"}</div>
          <div>
            <button className="btn text-sm">Düzenle</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
