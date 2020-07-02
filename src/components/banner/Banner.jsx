import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
export default function Banner(props) {
  return (
    <div className="banner">
      {!props.children? <><h1 className="banner-title">Offender</h1>
      <div className="divider"></div>
      <h2>The easy way to</h2>
      <Link to="/search">Find Out</Link></>:props.children}
     
    </div>
  );
}
