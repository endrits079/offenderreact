import React from "react";
import "./NavItem.css";
import { NavLink } from "react-router-dom";
export default function NavItem(props) {
  return (
    <li className="nav-item">
      <NavLink exact to={props.location}>
        {props.children}
      </NavLink>
    </li>
  );
}
