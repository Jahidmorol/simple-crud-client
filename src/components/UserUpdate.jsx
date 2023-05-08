import React from "react";
import { useLoaderData } from "react-router-dom";

const UserUpdate = () => {
  const loadUser = useLoaderData();
  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log({ name, email });
    const UpdatingUser = { name, email };

    fetch(`http://localhost:5000/users/${loadUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(UpdatingUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Update Successfull");
        }
      });
  };
  return (
    <div>
      <p>{loadUser.name}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" defaultValue={loadUser.name} id="" />
        <br />
        <input type="email" name="email" id="" defaultValue={loadUser.email} />
        <br />
        <input type="submit" value="Updadate User" />
      </form>
    </div>
  );
};

export default UserUpdate;
