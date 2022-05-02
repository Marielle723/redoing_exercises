import React, { useState } from "react";
import Logo from "./Logo";
import User from "./User";

function Header() {
  const [userName, setUserName] = useState("Marielle");
  // setUserName("Marielle");

  return (
    <header className="bank-header">
      <Logo />
      <User userName={userName} />
    </header>
  );
}

export default Header;
