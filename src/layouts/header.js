import React from "react";
import { BsFillBagFill } from "react-icons/bs";

export default function Header() {
  return (
    <div>
      <h1 className="title">OnlineShop</h1>
      <BsFillBagFill />
      <div className="badge"></div>
    </div>
  );
}
