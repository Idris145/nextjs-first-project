import React from "react";
import CustomButton from "../../atoms/CustomButton";
import CustomInput from "../../atoms/CustomInput";
import CustomInputLabel from "../../atoms/CustomInputLabel";

import "./signUpForm.css";

export default function SignUpForm() {
  return (
    <div className="sign-up-form-wrapper">
      <p>Welcome!</p>
      <br />
      <div>
        <div className="input-wrapper">
          <CustomInputLabel text={"Email"} />
          <CustomInput />
        </div>
        <div className="input-wrapper">
          <CustomInputLabel text={"First Name"} />
          <CustomInput />
        </div>
        <div className="input-wrapper">
          <CustomInputLabel text={"Last Name"} />
          <CustomInput />
        </div>
        <div className="input-wrapper">
          <CustomInputLabel text={"Password"} />
          <CustomInput type="password" />
        </div>
      </div>
      <br />
      <CustomButton text={"Sign Up"} />
    </div>
  );
}
