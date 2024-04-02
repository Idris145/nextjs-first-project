import React from "react";
import CustomButton from "../../atoms/CustomButton";
import CustomInput from "../../atoms/CustomInput";
import CustomInputLabel from "../../atoms/CustomInputLabel";

import "./signInForm.css";

export default function SignInForm() {
  return (
    <div className="sign-in-form-wrapper">
      <div className="sign-in-box">
        <div className="input-wrapper">
          <CustomInput placeholder={"Email"} />
        </div>
        <div className="input-wrapper">
          <CustomInput type="password" placeholder={"Password"} />
        </div>
        <div className="button-wrapper">
          <CustomButton text={"Sign In"} />
          <CustomButton text={"Register"} />
        </div>
      </div>
    </div>
  );
}
