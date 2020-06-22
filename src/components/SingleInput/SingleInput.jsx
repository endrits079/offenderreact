import React from "react";
import "./SingleInput.css";
import { Link } from "react-router-dom";
export default function SingleInput(props) {
  let element = "";
  switch (props.element) {
    case "textarea":
      element = <textarea onChange={props.handleChange} {...props.configs}></textarea>;
      break;
    case "select":
      element = (
        <select onChange={props.handleChange} {...props.configs}>
          {props.options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      );
      break;
    case "link":
      element = <Link {...props.configs}>{props.configs.title}</Link>;
      break;
    default:
      element = <input onChange={props.handleChange} {...props.configs}></input>;
      break;
  }
  return (
    <div className="single-input">
      {props.label ? <label {...props.label.configs}>{props.label.title}</label> : null}
      {element}
    </div>
  );
}
