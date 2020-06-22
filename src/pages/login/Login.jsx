import React, { useState } from "react";
import "./Login.css";
import SingleInput from "../../components/SingleInput/SingleInput";
import cloneDeep from "lodash.clonedeep";
import axios from "axios";
import { Login as loginAction } from "../../store/actions/login";
import { connect } from "react-redux";
import uuid from "uuid/dist/v4";
function Login(props) {
  let [formInputsState, setFormInputsState] = useState({
    email: {
      element: "input",
      configs: {
        placeholder: "email",
        id: "email",
        name: "email",
        value: "",
        type: "email",
      },
      label: {
        title: "e-mail",
        configs: {
          htmlFor: "email",
        },
      },
    },
    password: {
      element: "input",
      configs: {
        placeholder: "password",
        id: "password",
        name: "password",
        value: "",
        type: "password",
      },
      label: {
        title: "password",
        configs: {
          htmlFor: "password",
        },
      },
    },
    forgotPassword: {
      element: "link",
      configs: {
        // id: "forgotPassword",
        // name: "forgotPassword",
        title: "Forgot Password?",
        to: "/resetpassword",
      },
    },
    submit: {
      element: "input",
      configs: {
        id: "login",
        name: "login",
        value: "Login",
        type: "submit",
      },
    },
  });
  const handleChange = (event) => {
    let input = cloneDeep(formInputsState[event.target.name]);
    input.configs.value = event.target.value;
    setFormInputsState({ ...formInputsState, [event.target.name]: input });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    let url = "http://localhost/offender/users.php";
    let token = uuid();
    let params = new URLSearchParams();
    params.append("login", true);
    params.append("email", formInputsState.email.configs.value);
    params.append("password", formInputsState.password.configs.value);
    params.append("token", token);

    axios.post(url, params).then((data) => {
      props.login(token);
      console.log(data);
    });
  };
  let formInputs = [];
  for (let key in formInputsState) {
    formInputs.push(
      <SingleInput
        handleChange={handleChange}
        label={formInputsState[key].label}
        element={formInputsState[key].element}
        key={key}
        configs={formInputsState[key].configs}
      ></SingleInput>
    );
  }
  return (
    <div className="login">
      <div className="form-area">
        <h4>Offender | Login</h4>
        <form onSubmit={handleLogin}>{formInputs}</form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token) => dispatch(loginAction(token)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
