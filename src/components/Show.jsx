import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { useRef } from "react";

function Show({ pw }) {
  const [state, setState] = useState(false);
  const pass = useRef();
  const handleClick = () => {
    setState(true);
    setInterval(() => {
      setState(false);
    }, 2000);

    navigator.clipboard.writeText(pass.current.innerText);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-[19px] px-[32px] bg-[#24232C] border-b-8 border-[#18171F]">
        <h1 ref={pass}>{pw}</h1>
        <div className="flex items-center gap-4">
          {state && <p className="text-[10px] text-[#A4FFAF]">Copied!</p>}
          <button
            onClick={() => {
              handleClick();
            }}
          >
            <FaRegCopy className="text-[#A4FFAF]  hover:text-white hover:cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Show;
