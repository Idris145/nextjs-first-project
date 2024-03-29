import { InputLabel } from "@mui/material";
import React from "react";
import './customInputLabel.css'
export default function CustomInputLabel({ text }) {
  return <InputLabel className="custom-input-label-wrapper">{text}</InputLabel>;
}
