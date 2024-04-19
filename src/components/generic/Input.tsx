import React from "react";

interface InputProps {
  labelTitle: string;
  type: "text" | "email" | "password" | "number";
  name: string;
  id: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
  errors: string[] | undefined;
}

const Input: React.FC<InputProps> = ({
  labelTitle,
  type,
  name,
  id,
  placeholder,
  errors,
  onChange,
  value,
}) => {
  
  const errorMessage = errors?.join(", ");

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id}> {labelTitle} </label>
      <input
        type={type}
        name={name}
        id={id}
        className="border border-gray-300 rounded-xl p-2 outline-none"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Input;
