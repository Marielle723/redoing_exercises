import React from "react";
import Account from "./Account";

function Accounts({ accounts }) {
  //   console.log(accounts);
  return (
    <div>
      {accounts.map((acc, index) => {
        return <li key={index}>{acc}</li>;
      })}
    </div>
  );
}

export default Accounts;
