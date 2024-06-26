'use client'
import React from "react";
import useSignUpStore from "../../../stores/signUpStore";
import { Button, Input, CircularProgress } from "@mui/material";

import "./signUpForm.css";

export default function SignUpForm() {
  const { handleChangeEmail, handleChangePassword, handleClickSignUp, loading } = useSignUpStore();
  return (
    <div className="sign-up-form-wrapper">
      <div className="sign-up-box">
        <div className="input-wrapper">
          <Input placeholder={"Email"} onChange={(e) => handleChangeEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <Input type="password" placeholder={"Password"} onChange={(e) => handleChangePassword(e.target.value)} />
        </div>
        <div className="button-wrapper">
          {!loading
            ? <Button onClick={handleClickSignUp} >Sign Up</Button>
            : <CircularProgress />}
        </div>
      </div>
    </div>
  );
}
