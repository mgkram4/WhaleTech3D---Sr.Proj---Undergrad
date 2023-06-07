import React, { useState, useRef } from "react";
import FormInput from "./FormInput";
import emailjs from "@emailjs/browser";

function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    urlToFile: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "John",
      errorMessage:
        "First name should not exceed 16 characters or include any special characters!",
      label: "First Name",
      pattern: "^[a-zA-Z]{1,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Wayne",
      errorMessage:
        "Last name should not exceed 16 characters or include any special characters!",
      label: "Last Name",
      pattern: "^[a-zA-Z]{1,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
      errorMessage: "Email should be a valid address!",
      label: "Email",
      pattern: "^[^@]+@[^@]+\\.[^@]+$",
      required: true,
    },

    {
      id: 4,
      name: "phone",
      type: "tel",
      placeholder: "(888) 888-8888",
      errorMessage: "Phone should be 10 characters!",
      label: "Phone",
      //  pattern: "^\\d{10}$",
      required: true,
    },
    {
      id: 5,
      name: "urlToFile",
      type: "url",
      placeholder:
        "https://drive.google.com/drive/folders/examplefolder?usp=sharing",
      label: "URL to File",
      required: true,
    },
    {
      id: 6,
      name: "message",
      type: "textarea",
      placeholder: "I prefer to communicate over text message.",
      label: "Comments",
      required: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    console.log(formData);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pjzoakl",
        "template_67gkdnc",
        form.current,
        "EhkxCmc4ojfBZLfjR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true); // Show the pop-up when the email is sent successfully
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShowPopup(false); // Hide the popup if it was already shown
  };

  return (
    <div
      className=" min-h-screen z-0 bg-banner-bg-hero bg-no-repeat bg-center bg-cover
    "
    >
      {showPopup && (
        <div className="text-white popup border flex justify-center">
          Quote Requested
        </div>
      )}
      {showPopup &&
        setTimeout(() => {
          setShowPopup(false);
        }, 3000)}

      <h1 className="text-5xl flex justify-center py-4 text-[rgba(51,158,173,255)]  md:flex">
        Complete To Receive Quote!
      </h1>
      <h3 className="flex flex-wrap italic text-slate-400 justify-center ">
        ~Please Note~ Before Submitting the Form Please Ensure the Link is
        Viewable to public or is given permission to view at
        {" whaltech3dprints@gmail.com"}
      </h3>
      <div className=" justify-center items-center mr-10 ml-10 ">
        <div className=" border-slate-50 bg-slate-50 rounded-xl  ">
          <form ref={form} onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="flex justify-center">
              <button
                className="rounded-lg shadow-sm hover:bg-[rgba(41,128,143,255)] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-[rgba(51,158,173,255)] w-40 p-2 m-2"
                onClick={sendEmail}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
