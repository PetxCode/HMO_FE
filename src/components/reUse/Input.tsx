import { InputHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";
import { useState, useEffect, useRef } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  show?: boolean;
  showView?: boolean;
  errorText?: string;
}

const Input: FC<iInputProps> = ({
  placeholder,
  show,
  className,
  errorText,
  value,
  ...props
}) => {
  const inputRef: React.MutableRefObject<any> = useRef(null);
  const [state, setState] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    if (state) {
      inputRef?.current!.focus();
    }
  }, [state]);

  return (
    <div
      className={twMerge(
        `w-[300px] h-[50px]  border rounded-md m-2  relative transition-all duration-300 mb-6 ${
          state && "border-blue-500"
        } `,
        className
      )}
      style={{
        border: `${value ? "1px solid rgb(59, 130, 246)" : ""}`,
      }}
      onClick={() => {
        setState(true);
      }}
    >
      <label
        className={`text-[lightgray] transition-all duration-300 absolute  bg-white text-[12px] ml-2 px-[2px]
        `}
        style={{
          top: `${
            state
              ? "-0.75rem"
              : "0.75rem" && `${value ? "-0.75rem" : "0.75rem"}`
          }`,
        }}
      >
        {placeholder}
      </label>
      {show && (
        <div className="absolute top-1/3 right-3 cursor-pointer bg-transparent mx-1">
          {!view ? (
            <MdVisibility
              onClick={() => {
                setView(!view);
                setState(true);
              }}
            />
          ) : (
            <MdVisibilityOff
              onClick={() => {
                setView(!view);
                setState(true);
              }}
            />
          )}
        </div>
      )}
      <input
        ref={inputRef}
        {...props}
        className={twMerge(
          `px-2 outline-none ${
            show ? "w-[75%]" : "w-full"
          } h-full bg-transparent`,
          className
        )}
        onFocus={() => {
          setState(true);
        }}
        onBlur={() => {
          setState(false);
        }}
        type={view ? "password" : "text"}
      />
      <div className="text-[12px] text-right text-red-500 mt-1">
        {errorText}
      </div>
    </div>
  );
};

export default Input;
