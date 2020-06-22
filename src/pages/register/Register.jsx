import React, { useState } from "react";
import "./Register.css";
import SingleInput from "../../components/SingleInput/SingleInput";
import cloneDeep from "lodash.clonedeep";
import axios from "axios";

function Register(props) {
  let [formInputsState, setFormInputsState] = useState({
    business: {
      element: "input",
      configs: {
        placeholder: "business name",
        id: "business",
        name: "business",
        value: "",
        type: "text",
      },
      label: {
        title: "business name",
        configs: {
          htmlFor: "business",
        },
      },
    },
    businessid: {
      element: "input",
      configs: {
        placeholder: "business id",
        id: "businessid",
        name: "businessid",
        value: "",
        type: "text",
      },
      label: {
        title: "business id",
        configs: {
          htmlFor: "businessid",
        },
      },
    },
    businessowner: {
      element: "input",
      configs: {
        placeholder: "business owner",
        id: "businessowner",
        name: "businessowner",
        value: "",
        type: "text",
      },
      label: {
        title: "business owner",
        configs: {
          htmlFor: "businessowner",
        },
      },
    },
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
    confirmpassword: {
      element: "input",
      configs: {
        placeholder: "confirm password",
        id: "confirmpassword",
        name: "confirmpassword",
        value: "",
        type: "password",
      },
      label: {
        title: "confirm password",
        configs: {
          htmlFor: "confirmpassword",
        },
      },
    },
    registered: {
      element: "link",
      configs: {
        title: "Already a member?",
        to: "/login",
      },
    },
    submit: {
      element: "input",
      configs: {
        id: "register",
        name: "register",
        value: "Register",
        type: "submit",
      },
    },
  });
  const handleChange = (event) => {
    let input = cloneDeep(formInputsState[event.target.name]);
    input.configs.value = event.target.value;
    setFormInputsState({ ...formInputsState, [event.target.name]: input });
  };
  const handleRegister = (event) => {
    event.preventDefault();
    let url = "http://localhost/offender/users.php";
    let params = new URLSearchParams();
    params.append("register", true);
    for (let key in formInputsState) {
      if (formInputsState[key].element !== "link" && formInputsState[key].configs.type !== "submit") {
        params.append(key, formInputsState[key].configs.value);
      }
    }
    axios.post(url, params).then((data) => {
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
    <div className="register">
      <div className="form-area">
        <h4>Offender | Register</h4>
        <form onSubmit={handleRegister}>{formInputs}</form>
      </div>
    </div>
  );
}

export default Register;
