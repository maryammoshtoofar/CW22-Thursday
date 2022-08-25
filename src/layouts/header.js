import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1 className="title">OnlineShop</h1>
      <div>
        <Link to="cart">
          <BsFillBagFill />
        </Link>

        <div className="badge"></div>
      </div>
    </div>
  );
}
