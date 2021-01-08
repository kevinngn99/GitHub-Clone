import React, { useState } from "react";
import InputField from '../components/InputField';
import ToggleButton from "../components/ToggleButton";

export default function IndexPage() {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <div className="w-80 space-y-5">
        <label className="flex justify-center text-lg font-semibold">
          Sign Up
        </label>
        <InputField type="text" required={true} label="Email" message="This email is valid."/>
        <InputField type="text" required={true} label="Username" message="This username is available."/>
        <InputField type="password" required={true} label="Password" message="This password is weak."/>
      </div>
    </div>
  );
}
