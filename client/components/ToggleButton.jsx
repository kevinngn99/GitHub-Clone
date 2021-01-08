import React, { useState } from "react";

function ToggleButton(props) {
  const [toggle, setToggle] = useState(props.toggle);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      onClick={onToggle}
      className={`flex items-center h-8 w-14 p-1 rounded-full duration-300 ease-in-out cursor-pointer ${!toggle ? "bg-gray-200" : "bg-green-500"}`}
    >
      <div className={`h-6 w-6 rounded-full bg-white shadow-md duration-300 ease-in-out transform ${!toggle ? "" : "translate-x-6"}`}/>
    </div>
  );
}

export default ToggleButton;
