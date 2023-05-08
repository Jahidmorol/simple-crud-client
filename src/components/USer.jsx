import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const USer = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete SuccessFull");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  const handleUpdate = (_id) => {
    // fetch()
  }

  return (
    <div>
      <h2>{users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email}
            <Link to={`/users/${user._id}`}>
            <button onClick={() => handleUpdate(user._id)}>Update</button>
            </Link>
          <button onClick={() => handleDelete(user._id)}> X </button>
        </p>
      ))}
    </div>
  );
};

export default USer;
