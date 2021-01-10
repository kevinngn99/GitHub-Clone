import React, { useState } from "react";

function InputField(props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(props.error);

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const validate = (input, error) => {
    if (input === "") {
      return "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500";
    }
    else if (error) {
      return "text-red-900 border-red-300 focus:ring-red-500 focus:border-red-500";
    }
    else {
      return "text-green-900 border-green-300 focus:ring-green-500 focus:border-green-500";
    }
  };

  const Icon = () => {
    if (input !== "") {
      if (error) {
        return (
          <svg className="absolute right-0 h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
        );
      }
      else {
        return (
          <svg className="absolute right-0 h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
        );
      }
    }

    return null;
  };

  const Message = () => {
    if (input !== "") {
      if (error) {
        return <label className="mt-2 text-red-600">{props.message}</label>;
      }
      else {
        return <label className="mt-2 text-green-600">{props.message}</label>;
      }
    }

    return null;
  };

  return (
    <div className="flex flex-col text-sm">
      <div className="flex space-x-1 font-medium">
        <label className="text-gray-700 mb-1">
            {props.label}
        </label>
        <label className="text-red-600">
            {props.required ? "*" : ""}
        </label>
      </div>
      <div className="relative flex items-center">
        <input onChange={onInput} value={input} type={props.type} placeholder={props.placeholder} className={`w-full pr-8 rounded-md shadow-sm text-sm ${validate(input, error)}`}/>
        <Icon/>
      </div>
      <Message/>
    </div>
  );
}

export default InputField;
