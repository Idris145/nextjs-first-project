import { Input } from "@mui/material";
import React from "react";

export default function CustomInput({ type, placeholder }) {
  return <Input type={type} placeholder={placeholder} />;
}
