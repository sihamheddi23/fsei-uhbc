import React from "react";

interface InputProps {
  labelTitle: string;
  name: string;
  id: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  errors: string[] | undefined;
}

const TextArea: React.FC<InputProps> = ({
  labelTitle,
  name,
  id,
  placeholder,
  errors,
  onChange,
  required = false,
}) => {
  
  const errorMessage = errors?.join(", ");

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id}> {labelTitle} </label>
      <textarea className="border border-gray-300 rounded-xl p-2 outline-none" placeholder={placeholder} name={name} id={id} onChange={onChange} required={required}>
      </textarea>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default TextArea;
