import React from "react";
import CustomButton from "../../atoms/CustomButton";
import CustomInput from "../../atoms/CustomInput";
import CustomInputLabel from "../../atoms/CustomInputLabel";

import "./signUpForm.css";

export default function SignUpForm() {
  return (
    <div className="sign-up-form-wrapper">
      <div className="sign-up-box">
        <div className="input-wrapper">
          <CustomInput placeholder={"Email"} />
        </div>
        <div className="input-wrapper">
          <CustomInput placeholder={"First Name"} />
        </div>
        <div className="input-wrapper">
          <CustomInput placeholder={"Last Name"} />
        </div>
        <div className="input-wrapper">
          <CustomInput type="password" placeholder={"Password"} />
        </div>
        <div className="button-wrapper">
          <CustomButton text={"Sign Up"} />
        </div>
      </div>
    </div>
  );
}
