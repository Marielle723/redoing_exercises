import React from "react";
import Button from "./Button";

function Account({ account }) {
  console.log(account.name);
  return (
    <main className="bank-account">
      <div
        className="account-head"
        style={{
          backgroundColor: `${account.color}`,
          padding: 5,
          borderRadius: 2,
          color: "white",
        }}
      >
        <h3>{account.name}</h3>
        <h4>{account.balance} €</h4>
      </div>

      <ul className="account-operations">
        {account.operations.map((op, index) => {
          return (
            <li className="account-line " key={index}>
              <p>{op.date}</p>
              <p>{op.description}</p>
              <p className="amount">{op.amount} €</p>
            </li>
          );
        })}
      </ul>
      <Button />
    </main>
  );
}

export default Account;
