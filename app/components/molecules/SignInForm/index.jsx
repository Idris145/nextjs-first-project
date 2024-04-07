import React from "react";
import "./signInForm.css";
import { Button, Input } from "@mui/material";

export default function SignInForm() {
  return (
    <div className="sign-in-form-wrapper">
      <div className="sign-in-box">
        <div className="input-wrapper">
          <Input placeholder={"Email"} />
        </div>
                    
        <div className="input-wrapper">
          <Input type="password" placeholder={"Password"} />
        </div>
        <div className="button-wrapper">
          <Button> Sign In </Button>
          <Button> Register </Button>
        </div>
      </div>
    </div>
  );
}
