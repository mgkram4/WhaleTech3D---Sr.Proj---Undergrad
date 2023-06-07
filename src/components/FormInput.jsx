import React, { useState } from "react";

function FormInput(props) {
  const {
    id,
    name,
    type,
    label,
    placeholder,
    value,
    onChange,
    pattern,
    required,
  } = props;

  // State to keep track of whether the input has been touched or not
  const [touched, setTouched] = useState(false);

  // Determine whether the input is invalid based on its required status and value
  const invalid = required && !value;

  // Determine whether the input value matches the provided pattern, if any
  const patternMismatch = pattern && value && !new RegExp(pattern).test(value);

  // Determine whether to show the error message based on whether the input has been touched and is invalid
  const showError = touched && (invalid || patternMismatch);

  // Function to handle when the input loses focus, updating the touched state
  const handleBlur = () => {
    setTouched(true);
  };

  // Function to format a phone number input value with appropriate symbols
  const formatPhoneNumber = (input) => {
    // Remove all non-digits from the input
    const cleaned = ("" + input).replace(/\D/g, "");

    // Format the cleaned input using the appropriate symbols
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    // If the input can't be formatted, return it as is
    return input;
  };

  // Function to handle when the input value changes, formatting the phone number value and calling the onChange callback
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    onChange({
      target: {
        id,
        name,
        type,
        value: formattedValue,
      },
    });
  };

  return (
    <div className="flex-col mx-auto w-4/5 justify-center items-center text-xl mt-4 mb-4 border-black">
      <div className="flex flex-col w-full">
        <label className="ml-4 mb-1">{label}</label>
        <input
          className={`flex w-full border ml-4 mb-2 ${
            showError ? "border-red-500" : ""
          }`}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          pattern={pattern}
        />
        {showError && (
          <span className="flex font-12px p-3px text-red-600 ml-4">
            {props.errorMessage}
          </span>
        )}
      </div>
    </div>
  );
}

export default FormInput;
