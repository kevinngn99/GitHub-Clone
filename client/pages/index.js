import React, { useState } from "react";
import InputField from '../components/InputField';
import ToggleButton from "../components/ToggleButton";

export default function IndexPage() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex items-center justify-between">
      <img className="h-screen" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/68e7f197194893.5f4fde58dfa85.jpg"/>
      <div className="h-screen w-full bg-white flex items-center justify-center">
        <div className="w-96 space-y-5">
          <div className="flex flex-col space-y-1 pb-5">
            <label className="flex text-4xl font-bold">
              Create an account
            </label>
            <div className="space-x-1">
              <label className="text-gray-700 font-medium">
                Already have an account?
              </label>
              <a href="login" className="text-indigo-600 font-medium hover:text-indigo-500">Sign in</a>
            </div>
          </div>
          <InputField type="text" required={true} error={false} placeholder="Enter your email address" label="Email" message="This email is valid."/>
          <InputField type="text" required={true} error={true} placeholder="Enter a username" label="Username" message="This username is available."/>
          <div className="pb-1">
            <InputField type="password" required={true} error={false} placeholder="5+ characters" label="Password" message="This password is weak."/>
          </div>
          <button disabled={disabled} className={`py-2 w-full disabled:opacity-50 bg-indigo-600 text-white text-sm font-medium rounded-md focus:outline-none ${disabled ? "cursor-default" : "cursor-pointer hover:bg-indigo-700"}`}>Sign Up</button>
          <div className="text-sm space-x-1">
            <label className="text-gray-700 font-medium">By creating an account, you agree with all</label>
            <a href="terms-and-conditions" className="text-indigo-600 font-medium">Terms and Conditons</a>
            <label className="text-gray-700 font-medium">and</label>
            <a href="privacy-policies" className="text-indigo-600 font-medium">Privacy Policies</a>
            <label className="text-gray-700 font-medium">of No Cap.</label>
          </div>
        </div>
      </div>
    </div>
  );
}
