import React from "react";
import Account from "./Account";

function Accounts({ accounts }) {
  // console.log(accounts);
  // console.log(accounts[0].name);
  return (
    <div>
      {accounts.map((acc, index) => {
        return <Account key={index} account={acc} />;
      })}
    </div>
  );
}

export default Accounts;
