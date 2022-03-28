import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className="header-toolbar">
        <h1 style={{ marginLeft: "10%" }}>Logo</h1>
        {/* <button style={{ marginRight: "10%" }}>Cart</button> */}
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className="header-image"></div>
    </>
  );
};

export default Header;
