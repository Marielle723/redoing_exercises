import React from "react";
import Usericon from "./Usericon";

function User({ userName }) {
  return (
    <div className="user">
      <h2>{userName}</h2>
      <Usericon />
    </div>
  );
}

export default User;
