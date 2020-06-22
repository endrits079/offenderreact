import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";
import Hamburger from "../hamburger/Hamburger";
export default function Header() {
  return (
    <header className="header">
      <Logo></Logo>
      <Navbar></Navbar>
      <Hamburger></Hamburger>
    </header>
  );
}
