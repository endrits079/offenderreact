import React, { useState } from "react";
import './Contact.css'
import Banner from "../../components/banner/Banner";
import SingleInput from "../../components/SingleInput/SingleInput";
import cloneDeep from 'lodash.clonedeep'
export default function Contact(props) {
  const [inputsState, setInputsState] = useState({
    name: {
      element: "input",
      configs: {
        placeholder: "name",
        id: "name",
        name: "name",
        value: "",
        type: "text",
      },
      label: {
        title: "name",
        configs: {
          htmlFor: "name",
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
        title: "Business ID",
        configs: {
          htmlFor: "businessid",
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

    message: {
      element: "textarea",
      configs: {
        placeholder: "send a message ...",
        id: "message",
        name: "message",
        value: "",
        cols:50,
        rows:10
      },
      label: {
        title: "Message",
        configs: {
          htmlFor: "message",
        },
      },
    },

    submit: {
      element: "input",
      configs: {
        id: "sendmessage",
        name: "sendmessage",
        value: "Send Message",
        type: "submit",
      },
    },
  });
  const handleChange = (event) => {
    let input = cloneDeep(inputsState[event.target.name]);
    input.configs.value = event.target.value;
    setInputsState({ ...inputsState, [event.target.name]: input });
  };
  let formInputs = [];
  for (let key in inputsState) {
    formInputs.push(
      <SingleInput
        handleChange={handleChange}
        label={inputsState[key].label}
        element={inputsState[key].element}
        key={key}
        configs={inputsState[key].configs}
      ></SingleInput>
    );
  }
 
  return (
    <div className="contact">
      <Banner>
        <form action="" method="POST">
          {formInputs}
        </form>
      </Banner>
    </div>
  );
}
