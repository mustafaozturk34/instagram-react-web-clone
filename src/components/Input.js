import { useEffect, useRef, useState } from "react";

export default function Input({ label, type = "text", ...props }) {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
      inputRef.current.focus();
    } else if (type === "password") {
      setInputType("password");
      inputRef.current.focus();
    }
  }, [show]);
  return (
    <label className="block relative flex bg-zinc-50 border w-full focus-within:border-gray-400">
      <input
        required={true}
        type={inputType}
        ref={inputRef}
        className="w-full px-2 h-[38px] text-xs rounded-sm outline-none  peer-valid:pt-[10px] peer"
        {...props}
      />
      <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {type === "password" && props?.value && (
        <button
        type="button"
          onClick={() => setShow((show) => !show)}
          className="h-full flex items-center text-sm font-semibold pr-2"
        >
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
