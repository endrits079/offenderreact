import React from "react";
import "./Navbar.css";
import NavItem from "../navitems/NavItem";
export default function Navbar(props) {
  return (
    <nav className={props.mobile ? "nav-mobile" : "nav"}>
      <ul>
        <NavItem location="/">Home</NavItem>
        <NavItem location="/about">About Us</NavItem>
        <NavItem location="/contact">Contact</NavItem>
        <NavItem location="/login">Login</NavItem>
        <NavItem location="/register">Register</NavItem>
      </ul>
    </nav>
  );
}
