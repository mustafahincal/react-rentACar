import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../../context/UserContext";
import { deleteUserById, getUsers } from "../../services/userService";

function Users() {
  const { users, setUsers, selectedUser } = useUserContext();
  useEffect(() => {
    getUsers().then((result) => setUsers(result.data));
  }, []);

  const handleDeleteUserButton = (userId) => {
    deleteUserById({ userId }).then((result) => {
      toast.success(result.message);
      getUsers().then((result) => setUsers(result.data));
    });
  };
  return (
    <div>
      {users.map((user, index) => (
        <div
          className="py-4 px-6 bg-white hover:bg-gray-100 rounded w-full mb-3 flex justify-between items-center"
          key={index}
        >
          <div>{user.firstName + " " + user.lastName}</div>
          <div>{user.email}</div>
          <div>{user.status ? "true" : "false"}</div>
          {user.id !== selectedUser.id ? (
            <div>
              <button
                onClick={() => handleDeleteUserButton(user.id)}
                className="btn text-sm bg-red-500"
              >
                Sil
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Users;
